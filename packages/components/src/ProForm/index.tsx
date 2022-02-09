import React, { useMemo } from 'react';
import { Collapse, Card } from 'uiw';
import FormDom from './formdom';
import ReadFormDom from './readform';
import { getFormFields } from './widgets';
import { ProFormProps } from './type';
import { StoreCtx } from './hooks/store';
import './style/form-item.less';

export default function ProForm(props: ProFormProps) {
  const {
    formDatas = [],
    title = '',
    formType = 'card',
    readOnly = false,
    customWidgetsList = {},
    form,
  } = props;

  // 获取表单配置
  const formfields = useMemo(
    () => getFormFields(readOnly, formDatas, customWidgetsList),
    [formDatas],
  );

  const { submitvalidate, clickRef } = form || {};

  const store = useMemo(
    () => ({
      clickRef,
      submitvalidate,
    }),
    [form],
  );

  let children: React.ReactNode;
  const formDomProps = { ...props, formfields };
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
    children = <Card title={renderTitle}>{child}</Card>;
  } else if (formType === 'collapse') {
    children = (
      <Collapse title={renderTitle} activeKey={['1']}>
        <Collapse.Panel header={title} key={'1'}>
          {child}
        </Collapse.Panel>
      </Collapse>
    );
  } else {
    children = child;
  }

  return <StoreCtx.Provider value={store}>{children}</StoreCtx.Provider>;
}
