/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  getDescriptorSimple,
  dataToKeys,
  destructDataPath,
  getDataPath,
  isExpression,
  parseSingleExpression,
  isObject,
  allPromiseFinish,
  removeDups,
} from './utils';
import { defaultValidateMessagesCN } from './validateMessageCN';
import { defaultValidateMessages } from './validateMessage';
import Validator from '../../lib/async-validator';
import { Schema } from '../src/interface';
// @ts-ignore
import { get, merge } from 'lodash';

export const parseSchemaExpression = (
  schema: Schema,
  formData: object,
  path: string,
) => {
  if (!isObject(schema)) return schema;
  const result: any = {};
  Object.keys(schema).forEach((key) => {
    const item = schema[key];
    if (isObject(item)) {
      result[key] = parseSchemaExpression(item, formData, path);
    } else if (isExpression(item)) {
      result[key] = parseSingleExpression(item, formData, path);
    } else {
      result[key] = item;
    }
  });
  return result;
};

const getRelatedPaths = (path: string, flatten: any) => {
  const parentPaths = [];
  const pathArr = path.split('.');
  while (pathArr.length > 0) {
    parentPaths.push(pathArr.join('.'));
    pathArr.pop();
  }

  let result = [...parentPaths];

  parentPaths.forEach((path) => {
    const { id, dataIndex } = destructDataPath(path);
    if (
      flatten[id] &&
      flatten[id].schema &&
      Array.isArray(flatten[id].schema.dependecies)
    ) {
      const deps = flatten[id].schema.dependecies;
      const fullPathDeps = deps.map((dep: string) =>
        getDataPath(dep, dataIndex),
      );
      result = [...result, ...fullPathDeps];
    }
  });
  return removeDups(result).map((path: string) => {
    if (path.slice(-1) === ']') {
      const pattern = /\[[0-9]+\]$/;
      return path.replace(pattern, '');
    } else {
      return path;
    }
  });
};

export const validateField = ({
  path,
  formData,
  flatten,
  options,
}: {
  path: string;
  formData: any;
  flatten: any;
  options: any;
}) => {
  const paths = getRelatedPaths(path, flatten);
  // console.log('all relevant paths:', paths);
  const promiseArray = paths.map((path: string) => {
    // eslint-disable-next-line no-unused-vars
    const { id, dataIndex } = destructDataPath(path);
    console.log('dataIndex', dataIndex);
    if (flatten[id] || flatten[`${id}[]`]) {
      const item = flatten[id] || flatten[`${id}[]`];
      const singleData = get(formData, path);
      let schema = item.schema || {};
      const finalSchema = parseSchemaExpression(schema, formData, path);
      return validateSingle(singleData, finalSchema, path, options); // is a promise
    } else {
      return Promise.resolve();
    }
  });

  return allPromiseFinish(promiseArray)
    .then((res: any) => {
      const errorFields = res
        .filter((item: any) => Array.isArray(item) && item.length > 0)
        .map((item: any) => {
          const name = item[0].field;
          const error = item.map((m: any) => m.message).filter((m: any) => !!m);
          return { name, error };
        });
      return errorFields;
    })
    .catch((e) => {
      console.log(e);
    });
};

// pathFromData => allPath
const getAllPaths = (paths: string[], flatten: any) => {
  if (!Array.isArray(paths)) return [];
  const result = [...paths]
    .filter((p) => p.indexOf(']') > -1)
    .map((p1) => {
      const last = p1.lastIndexOf(']');
      return p1.substring(0, last + 1);
    });
  const uniqueResult: any[] = removeDups(result);

  const allFlattenPath = Object.keys(flatten);
  let res = [...paths];
  uniqueResult.forEach((result) => {
    const { id, dataIndex } = destructDataPath(result);
    if (flatten[id]) {
      const children = allFlattenPath.filter(
        (f) => f.indexOf(id) === 0 && f !== id,
      );
      const childrenWithIndex = children
        .map((child) => {
          const p = getDataPath(child, dataIndex);
          return p.split('[]')[0];
        })
        .filter((i) => !!i);
      res = [...res, ...removeDups(childrenWithIndex)];
    }
  });
  return removeDups(res);
};

export const validateAll = ({
  formData,
  flatten,
  options, // {locale = 'cn', validateMessages = {}}
}: any) => {
  const paths = dataToKeys(formData);
  const allPaths = getAllPaths(paths, flatten);
  // console.log('allPaths', allPaths);
  // console.log(formData, dataToKeys(formData), 'dataToKeysdataToKeys');
  const promiseArray = allPaths.map((path: string) => {
    // eslint-disable-next-line no-unused-vars
    const { id, dataIndex } = destructDataPath(path);
    console.log('dataIndex', dataIndex);
    if (flatten[id] || flatten[`${id}[]`]) {
      const item = flatten[id] || flatten[`${id}[]`];
      const singleData = get(formData, path);
      let schema = item.schema || {};
      const finalSchema = parseSchemaExpression(schema, formData, path);
      return validateSingle(singleData, finalSchema, path, options); // is a promise
    } else {
      return Promise.resolve();
    }
  });

  return allPromiseFinish(promiseArray)
    .then((res: any) => {
      const errorFields = res
        .filter(
          (item: any) =>
            Array.isArray(item) && item.length > 0 && item[0].message !== null,
        ) // NOTICE: different from validateField
        .map((item: any) => {
          const name = item[0].field;
          const error = item.map((m: any) => m.message).filter((m: any) => !!m);
          return { name, error };
        });
      return errorFields;
    })
    .catch((e) => {
      console.log(e);
    });
};

const validateSingle = (
  data: any,
  schema: any = {},
  path: string,
  options: any = {},
) => {
  if (schema.hidden) {
    return Promise.resolve();
  }
  console.log('descriptor', { [path]: data });

  const { validateMessages = {}, locale = 'cn' } = options;
  const cn = defaultValidateMessagesCN;
  const en = defaultValidateMessages;
  const descriptor = getDescriptorSimple(schema, path);
  // console.log('descriptor, schema, path', descriptor, schema, path, data);
  // TODO: 有些情况会出现没有rules，需要看一下，先兜底

  let validator;
  try {
    validator = new Validator(descriptor);
  } catch (error) {
    return Promise.resolve();
  }
  let messageFeed = locale === 'en' ? en : cn;
  merge(messageFeed, validateMessages);
  validator.messages(messageFeed);

  return (
    validator
      .validate({ [path]: data })
      // eslint-disable-next-line no-unused-vars
      .then((res) => {
        return [{ field: path, message: null }];
      })
      // eslint-disable-next-line no-unused-vars
      .catch(({ errors, fields }) => {
        console.log('errors-----<<<<<<', errors);
        return errors;
      })
  );
};

// 无用
// const theRest = () => {
//   let _schema = getSchemaFromFlatten(flatten);
//   if (Object.keys(_schema).length === 0) return Promise.resolve();
//   const descriptor = getDescriptorFromSchema({
//     schema: _schema,
//     isRequired,
//   }).fields;
//   window.descriptor = descriptor;

//   let touchVerifyList = [];

//   // 如果是最后的校验，所有key都touch了，就不用算这个了
//   // 因为要整个构建validator在list的情况太复杂了，所以required单独拿出来处理，但是这边有不少单独处理逻辑，例如message
//   if (!isRequired) {
//     touchedKeys.forEach(key => {
//       const keyRequired = isPathRequired(key, _schema);
//       const val = get(formData, key);
//       const nullValue = [undefined, null, ''].indexOf(val) > -1; // 注意 0 不是
//       const isEmptyMultiSelect = Array.isArray(val) && val.length === 0;
//       if ((nullValue || isEmptyMultiSelect) && keyRequired.required) {
//         const _message =
//           keyRequired.message || validateMessages.required || '${title}必填';
//         touchVerifyList.push({ name: key, error: [_message] });
//       }
//     });
//   }

//   const cn = defaultValidateMessagesCN;
//   const en = defaultValidateMessages;

//   // TODO: 有些情况会出现没有rules，需要看一下，先兜底
//   let validator;
//   try {
//     validator = new Validator(descriptor);
//   } catch (error) {
//     return Promise.resolve([]);
//   }
//   let messageFeed = locale === 'en' ? en : cn;
//   merge(messageFeed, validateMessages);
//   validator.messages(messageFeed);
//   return validator
//     .validate(formData || {})
//     .then(res => {
//       if (touchVerifyList.length > 0) return touchVerifyList;
//       return [];
//     })
//     .catch(({ errors, fields }) => {
//       // error的name改成正常的path
//       let normalizedErrors = getArray(errors).map(err => {
//         const _path = formatPathFromValidator(err.field);
//         return { name: _path, error: [err.message] };
//       });
//       // 添加touched的required
//       normalizedErrors = [...normalizedErrors, ...touchVerifyList];
//       // 合并同名的error
//       let _errorFields = [];
//       normalizedErrors.forEach(item => {
//         const matchIndex = _errorFields.findIndex(
//           ele => ele.name === item.name
//         );
//         if (matchIndex === -1) {
//           _errorFields.push(item);
//         } else {
//           _errorFields[matchIndex].error = [
//             ..._errorFields[matchIndex].error,
//             ...item.error,
//           ];
//         }
//       });
//       return _errorFields;
//     });
// };

// var d3 = {
//   list: {
//     type: 'array',
//     defaultField: {
//       type: 'object',
//       fields: {
//         userName: [
//           {
//             bind: false,
//             title: 'User Name',
//             type: 'string',
//             rules: [
//               {
//                 min: 5,
//                 message: '长度需要大于5',
//               },
//               {
//                 max: 12,
//               },
//             ],
//           },
//           {
//             min: 5,
//             message: '长度需要大于5',
//           },
//           {
//             max: 12,
//           },
//         ],
//         selectName: {
//           title: '单选',
//           type: 'string',
//           enum: ['a', 'b', 'c'],
//           enumNames: ['早', '中', '晚'],
//           required: true,
//         },
//         checkboxName: {
//           title: '是否判断',
//           type: 'boolean',
//           valuePropName: 'checked',
//         },
//       },
//     },
//   },
// };

// var d2 = {
//   list: {
//     type: 'array',
//     defaultField: {
//       type: 'object',
//       fields: {
//         userName: [
//           {
//             bind: false,
//             title: 'User Name',
//             type: 'string',
//             rules: [
//               {
//                 min: 5,
//                 message: '长度需要大于5',
//               },
//               {
//                 max: 12,
//               },
//             ],
//           },
//           {
//             min: 5,
//             message: '长度需要大于5',
//           },
//           {
//             max: 12,
//           },
//         ],
//         selectName: {
//           title: '单选',
//           type: 'string',
//           enum: ['a', 'b', 'c'],
//           enumNames: ['早', '中', '晚'],
//           required: true,
//         },
//         checkboxName: {
//           title: '是否判断',
//           type: 'boolean',
//           valuePropName: 'checked',
//         },
//       },
//     },
//   },
// };
