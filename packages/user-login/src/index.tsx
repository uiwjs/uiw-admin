import React from 'react';
import bgDefault from './assets/r2g7rm.jpg';
import DocumentTitle from '@uiw-admin/document-title';
import { Form, Row, Col, ButtonProps, Button, FormFieldsProps } from 'uiw';
import {
  QueryClientProvider,
  queryClient,
  useReactMutation,
  ReactMutationOptions,
} from '@kkt/request';

import './styles/index.css';

export type FormValue = {
  username?: string;
  password?: string;
};

export interface FieldsProps<T = any> extends FormFieldsProps<T> {
  name: string;
  verification?: (
    value: any,
    current: Record<string, any>,
  ) => string | boolean | null;
}

export interface UserLoginProps {
  /** 卡片框的位置 */
  align?: 'left' | 'right' | 'center';
  classNameWarp?: string;
  styleWarp?: React.CSSProperties;
  /** 卡片的 className */
  classNameBody?: string;
  /** 卡片的 style */
  styleBody?: React.CSSProperties;
  /** 页脚 */
  footer?: React.ReactNode;
  /**
   * 背景图片
   * @deprecated 推荐使用 `styleContainer`
   */
  bg?: string;
  logo?: string | null;
  children?: React.ReactNode;
  /** 项目名称 */
  projectName?: string | null;
  /** 登录接口返回 */
  onSuccess?: (resp: any, form: FormValue | undefined) => void;
  /** 登录按钮 属性 */
  btnProps?: Omit<ButtonProps, 'ref'>;
  /** 请求接口 */
  api?: string;
  /** 调用接口之前 , 可以通过这个添加额外参数  返回 false 则不进行登录操作  */
  onBefore?: (store: FormValue) => Record<string, any> | boolean;
  /** request 请求 options 配置参数 */
  requestConfig?: ReactMutationOptions;
  /** 登录按钮位置 按钮组, title 为显示标题 */
  buttons?: (Omit<ButtonProps, 'ref'> & { title?: React.ReactNode })[];
  /**
   * 默认输入框保存字段
   * @deprecated 推荐使用 `defaultFieldsConfig`
   */
  saveField?: {
    /** 登录账号 */
    userName?: string;
    /** 密码 */
    passWord?: string;
  };
  initialValues?: any;
  /** 默认 输入框 属性配置 */
  defaultFieldsConfig?: {
    userName?: Partial<FieldsProps>;
    passWord?: Partial<FieldsProps>;
  };
  // 渲染表单配置
  fields?: FieldsProps[];
  // 是否使用默认的 fields
  isDefaultFields?: boolean;
  /** 背景框`style` 可再次调整背景图样 */
  styleContainer?: React.CSSProperties;
}

const Login = (props: UserLoginProps) => {
  const {
    align = 'center',
    classNameWarp = '',
    styleWarp = {},
    classNameBody = '',
    styleBody = {},
    footer = true,
    bg = bgDefault,
    logo = bgDefault,
    children,
    projectName = 'UIW Admin',
    onSuccess = () => null,
    btnProps = {},
    api,
    onBefore,
    requestConfig,
    buttons,
    saveField,
    fields,
    initialValues = {},
    isDefaultFields = true,
    defaultFieldsConfig,
    styleContainer = {},
  } = props;
  let { userName = 'username', passWord = 'password' } = saveField || {};
  const userNameLabel =
    ((defaultFieldsConfig || {})['userName'] || {})['label'] || '账号';
  const passWordLabel =
    ((defaultFieldsConfig || {})['passWord'] || {})['label'] || '密码';
  userName =
    ((defaultFieldsConfig || {})['userName'] || {})['name'] || userName;
  passWord =
    ((defaultFieldsConfig || {})['passWord'] || {})['name'] || passWord;

  const [store, setStore] = React.useState<FormValue>();

  const { mutateAsync, isLoading } = useReactMutation({
    url: api,
    method: 'POST',
    ...requestConfig,
    onSuccess: (res) => onSuccess(res, store),
    onError: () => onSuccess(undefined, store),
  });

  const defaultFields: FieldsProps[] = [
    {
      name: userName,
      label: `${userNameLabel}`,
      labelFor: userName,
      required: true,
      initialValue: initialValues && initialValues[userName],
      children: (
        <input
          type="text"
          disabled={!!isLoading}
          id={userName}
          placeholder={`请输入${userNameLabel}`}
          className="form-field"
        />
      ),
      ...(defaultFieldsConfig?.userName || {}),
    },
    {
      name: passWord,
      label: `${passWordLabel}`,
      labelFor: passWord,
      required: true,
      initialValue: initialValues && initialValues[passWord],
      children: (
        <input
          disabled={!!isLoading}
          id={passWord}
          type="password"
          placeholder={`请输入${passWordLabel}`}
          className="form-field"
        />
      ),
      ...(defaultFieldsConfig?.passWord || {}),
    },
  ];

  let fieldArr = defaultFields;
  if (fields && Array.isArray(fields)) {
    if (isDefaultFields) {
      fieldArr = defaultFields.concat(fields);
    } else {
      fieldArr = fields;
    }
  }

  const FooterRender = React.useMemo(() => {
    if (footer === false || footer === '') {
      return null;
    } else if (footer === true) {
      return (
        <div className="copyright-footer">
          版权所有 copyright &copy; 2022 uiw admin
        </div>
      );
    }
    return footer;
  }, []);

  return (
    <div
      className="uiw-loayout-login"
      style={{ background: `url(${bg})`, ...styleContainer }}
    >
      <DocumentTitle title={projectName} />
      <div
        style={styleWarp}
        className={`uiw-loayout-login-warp ${classNameWarp} uiw-loayout-login-warp-${align}`}
      >
        <div
          className={`uiw-loayout-login-body ${classNameBody}`}
          style={styleBody}
        >
          {logo && <img className="logo" src={logo} />}
          {projectName && <span className="uiw-title">{projectName}</span>}
          {children ? (
            children
          ) : (
            <Form
              resetOnSubmit={false}
              onSubmit={async ({ current }) => {
                const errorObj: any = {};
                fieldArr.forEach((item) => {
                  if (
                    item.verification &&
                    typeof item.verification === 'function'
                  ) {
                    const result = item.verification(
                      current[item.name],
                      current,
                    );
                    if (typeof result === 'string' && result) {
                      errorObj[item.name] = result;
                    }
                  } else if (item.required && !current[item.name]) {
                    errorObj[item.name] = `${item.label}不能为空`;
                  }
                });

                if (Object.keys(errorObj).length > 0) {
                  const err: any = new Error();
                  err.filed = errorObj;
                  throw err;
                } else {
                  if (typeof onBefore === 'function') {
                    const result = onBefore(current);
                    if (typeof result === 'object') {
                      setStore({
                        ...current,
                        ...(result || {}),
                      });
                      await mutateAsync({
                        ...(current as any),
                        ...(result || {}),
                      });
                      return;
                    }
                    if (!result) {
                      return;
                    }
                  }
                  setStore({ ...current });
                  await mutateAsync({ ...(current as any) });
                }
              }}
              onSubmitError={(error: any) => {
                if (error.filed) {
                  return { ...error.filed };
                }
                return null;
              }}
              fields={fieldArr.reduce((pre, current) => {
                if (!current || (current && !current.name)) {
                  return { ...pre };
                }
                const { name, required, labelFor, ...rest } = current;
                return {
                  ...pre,
                  [name]: { labelFor: name || labelFor, ...rest },
                };
              }, {})}
            >
              {({ fields = {}, canSubmit }) => {
                const disabled =
                  typeof canSubmit === 'function' ? canSubmit() : undefined;
                return (
                  <div>
                    {fieldArr.map((item, index) => {
                      return (
                        <Row key={index}>
                          <Col style={{ color: '#333' }}>
                            {fields[item.name]}
                          </Col>
                        </Row>
                      );
                    })}
                    <Row>
                      {buttons && buttons.length > 0 ? (
                        buttons.map((item, idx) => {
                          const { title, ...rest } = item;
                          return (
                            <Button
                              key={idx}
                              loading={
                                !!isLoading && item.htmlType === 'submit'
                              }
                              disabled={!disabled}
                              className="btns"
                              type="danger"
                              {...rest}
                            >
                              {title}
                            </Button>
                          );
                        })
                      ) : (
                        <Button
                          disabled={!disabled}
                          loading={!!isLoading}
                          className="btns"
                          block
                          style={{ marginTop: 20, height: 44 }}
                          htmlType="submit"
                          type="dark"
                          {...btnProps}
                        >
                          登录
                        </Button>
                      )}
                    </Row>
                  </div>
                );
              }}
            </Form>
          )}
        </div>
      </div>
      {FooterRender}
    </div>
  );
};

const LoginPage = (props: UserLoginProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Login {...props} />
    </QueryClientProvider>
  );
};

export default LoginPage;
