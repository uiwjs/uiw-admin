import React, { useMemo, Fragment } from 'react'
import { Collapse, Card } from 'uiw';
import FormDom from './formdom'
import { getFormFields } from './widgets'
import { ProFormProps } from './type'
import './style/form-item.less';

export default function ProForm(props: ProFormProps) {

  const { formDatas = [], title = "", formType = 'card' } = props

  // 获取表单配置
  const formfields = useMemo(() => getFormFields(formDatas), [formDatas]);

  // 判断表单类型
  const renderForm = useMemo(() => {
    const formDomProps = { ...props, formfields }
    if (formType === 'card') return <Card title={title}> <FormDom {...formDomProps} /></Card>
    if (formType === 'collapse') {
      return (
        <Collapse title={title} activeKey={['1']}>
          <Collapse.Panel header={title} key={'1'}>
            <FormDom {...formDomProps} />
          </Collapse.Panel>
        </Collapse>
      )
    }
    return <Fragment>{title && <h3>{title}</h3>} <FormDom {...formDomProps} /></Fragment>
  }, [formType, formDatas, title])


  return renderForm
}
