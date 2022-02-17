import React, { useMemo, useRef, forwardRef, useImperativeHandle } from 'react';
import { Collapse, Card } from 'uiw';
import FormDom from './formdom';
import ReadFormDom from './readform';
import { getFormFields } from './widgets';
import { ProFormProps, UseFormStateProps } from './type';
import { StoreCtx } from './hooks/store';
import './style/form-item.less';

function ProForm(props: ProFormProps, ref: any) {
  const {
    formDatas = [],
    title = '',
    formType = 'card',
    readOnly = false,
    customWidgetsList = {},
    form,
    cardProps = {},
    collapseProps = {},
    collapsePanelProps = {},
  } = props;

  // 获取表单配置
  const formfields = useMemo(
    () => getFormFields(readOnly, formDatas, customWidgetsList),
    [formDatas],
  );

  const { setFormState } = form || {};

  const store = useMemo(() => ({ setFormState }), [form]);

  // 通过ref导出实例方法
  const formInstanceRef = useRef<{ current: UseFormStateProps }>();
  useImperativeHandle(ref, () => {
    // 表单验证(同时兼容老api submitvalidate和新api onSubmit )
    const submitvalidate = () =>
      formInstanceRef?.current?.current?.onSubmit() || null;
    const onSubmit = () =>
      formInstanceRef?.current?.current?.onSubmit() || null;
    // 获取表单的值
    const getFieldValues = () =>
      formInstanceRef?.current?.current?.getFieldValues() || {};
    // 获取表单错误信息
    const getError = () => formInstanceRef?.current?.current?.getError() || {};
    return {
      ...formInstanceRef.current,
      submitvalidate,
      onSubmit,
      getFieldValues,
      getError,
    };
  });

  let children: React.ReactNode;
  const formDomProps = { ...props, formfields, formInstanceRef };
  // 非详情模式下渲染标题
  const renderTitle = !readOnly ? title : undefined;
  // 判断是否是详情模式
  const child = readOnly ? (
    <ReadFormDom {...props} />
  ) : (
    <FormDom {...formDomProps} />
  );

  // 判断渲染的form类型
  if (formType === 'card') {
    children = (
      <Card title={renderTitle} {...cardProps}>
        {child}
      </Card>
    );
  } else if (formType === 'collapse') {
    children = (
      <Collapse title={renderTitle} activeKey={['1']} {...collapseProps}>
        <Collapse.Panel header={title} key={'1'} {...collapsePanelProps}>
          {child}
        </Collapse.Panel>
      </Collapse>
    );
  } else {
    children = child;
  }

  return <StoreCtx.Provider value={store}>{children}</StoreCtx.Provider>;
}

export default forwardRef(ProForm);
