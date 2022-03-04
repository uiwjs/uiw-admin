import React from 'react';
// @ts-ignore
import bgDefault from './assets/r2g7rm.jpg';
import DocumentTitle from '@uiw-admin/document-title';
import { Form, Row, Col, ButtonProps, Button, FormFieldsProps } from 'uiw';
import useSWR from 'swr';
import { request } from '@uiw-admin/utils';
import { Options } from '@uiw-admin/utils/lib/request';

import './styles/index.css';

export type FormValue = {
  username?: string;
  password?: string;
  swr_Rest_Time?: number | string;
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
  requestConfig?: Options;
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

export default (props: UserLoginProps) => {
  const {
    align = 'center',
    classNameWarp = '',
    styleWarp = {},
    classNameBody = '',
    styleBody = {},
    footer,
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
  const { isValidating } = useSWR(
    store
      ? [api, { method: 'POST', body: store, ...(requestConfig || {}) }]
      : null,
    request,
    {
      revalidateOnFocus: false,
      onSuccess: (resp) => onSuccess(resp, store),
    },
  );

  const defaultFields: FieldsProps[] = [
    {
      name: userName,
      label: `${userNameLabel}`,
      labelFor: userName,
      required: true,
      children: (
        <input
          type="text"
          disabled={!!isValidating}
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
      children: (
        <input
          disabled={!!isValidating}
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
              onSubmit={({ current }) => {
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
                  } else if (item.required && !current[userName]) {
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
                        swr_Rest_Time: new Date().getTime(),
                      });
                      return;
                    }
                    if (!result) {
                      return;
                    }
                  }
                  setStore({ ...current, swr_Rest_Time: new Date().getTime() });
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
              {({ fields, canSubmit }) => {
                return (
                  <div>
                    {fieldArr.map((item, index) => {
                      return (
                        <Row key={index}>
                          <Col>{fields[item.name]}</Col>
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
                                !!isValidating && item.htmlType === 'submit'
                              }
                              disabled={!canSubmit()}
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
                          disabled={!canSubmit()}
                          loading={!!isValidating}
                          className="btns"
                          block
                          style={{ marginTop: 20 }}
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
        {footer ? (
          footer
        ) : (
          <div className="copyright-footer">
            版权所有 copyright &copy; 2022 uiw admin
          </div>
        )}
      </div>
    </div>
  );
};
