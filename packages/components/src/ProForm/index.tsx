import React, { useMemo } from 'react'
import { Collapse, Card } from 'uiw';
import FormDom from './formdom'
import { getFormFields } from './widgets'
import { ProFormProps } from './type'
import './style/form-item.less';

function ProForm(props: ProFormProps) {

  const { formDatas = [], title = "", formType = 'card' } = props

  // 获取表单配置
  const formfields = useMemo(() => getFormFields(formDatas), [formDatas]);

  const renderForm = useMemo(() => {
    const formDomProps = { ...props, formfields };
    // 卡片类型
    if (formType === 'card')
      return (
        <Card title={title}>
          <FormDom {...formDomProps} />
        </Card>
      );
    // 折叠卡片类型
    if (formType === 'collapse') {
      return (
        <Collapse activeKey={['1']}>
          <Collapse.Panel header={title} key={'1'}>
            <FormDom {...formDomProps} />
          </Collapse.Panel>
        </Collapse>
      );
    }
    // 一般表单
    return (
      <div>
        {title && <h3>{title}</h3>}
        <FormDom {...formDomProps} />
      </div>
    );
  }, [formType, formDatas, title]);

  return <div style={{ flex: 1 }}>{renderForm}</div>;
}

export default ProForm;
