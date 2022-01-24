import React, { useMemo, Fragment } from 'react'
import { Collapse, Card } from 'uiw';
import FormDom from './formdom'
import ReadFormDom from './readform'
import { getFormFields } from './widgets'
import { ProFormProps } from './type'
import './style/form-item.less';

export default function ProForm(props: ProFormProps) {

  const { formDatas = [], title = "", formType = 'card', readOnly = false } = props

  // 获取表单配置
  const formfields = useMemo(() => getFormFields(readOnly, formDatas), [formDatas,]);

  // 判断表单类型
  const renderForm = useMemo(() => {

    const formDomProps = { ...props, formfields }

    // 判断是否是详情模式
    const children = readOnly ? <ReadFormDom {...props} /> : <FormDom {...formDomProps} />
    // 非详情模式下渲染标题
    const renderTitle = !readOnly ? title : null
    if (formType === 'card') return <Card title={renderTitle}>{children}</Card>
    if (formType === 'collapse') {
      return (
        <Collapse title={renderTitle} activeKey={['1']}>
          <Collapse.Panel header={title} key={'1'}>
            {children}
          </Collapse.Panel>
        </Collapse>
      )
    }
    return <Fragment>{renderTitle && <h3>{title}</h3>}{children}</Fragment>
  }, [formType, formDatas, title])


  return renderForm
}
