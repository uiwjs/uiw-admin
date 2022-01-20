import React, { useMemo } from 'react'
import { Collapse, Card,ButtonProps } from 'uiw';
import FormDom from './formdom'
import { getFormFields,commonWidgetsList } from './widgets'
import './style/form-item.less';

export type Fields = {
  [key: string]: any;
};

export interface BtnProps extends ButtonProps {
  label?: string;
  btnType: 'submit' | 'reset' | 'other';
  onPress?: () => void;
  show?: boolean;
  width?: number
}

export interface FormItemsOptionsProps {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface FormItemsProps {
  /** 表单元素标题 */
  label?: string;
  /** 表单元素字段名称 */
  key: string;
  /** 表单元素类型 */
  widget: typeof commonWidgetsList;
  /** 表单元素值，可以是默认值 */
  initialValue?: any | any[];
  /** 数据化选项内容, type为 radio、checkbox、select 生效 */
  option?: FormItemsOptionsProps[];
  widgetProps?: any;
  /** 是否显示 */
  hide?: boolean;
  full?:boolean;
}

export interface ProFormProps {
  formDatas?: FormItemsProps[];
  rowColspan?: number;
  onSubmit?: (initial: Record<string, any>, current: Record<string, any>) => void;
  onChange?: (initial: Record<string, any>, current: Record<string, any>) => void;
  btns?: BtnProps[]
  title?: any;
  formType?: 'collapse' | 'card';
}

function ProForm(props: ProFormProps) {

  const { formDatas = [], title = "", formType = 'card'} = props

  // 获取表单配置
  const formfields = useMemo(() => getFormFields(formDatas), [formDatas]);

  const renderForm = useMemo(() => {
    const formDomProps = { ...props, formfields }
    // 卡片类型
    if (formType === 'card') return <Card title={title}><FormDom {...formDomProps} /></Card>
    // 折叠卡片类型
    if (formType === 'collapse') {
      return (
        <Collapse activeKey={['1']}>
          <Collapse.Panel header={title} key={'1'}>
            <FormDom {...formDomProps} />
          </Collapse.Panel>
        </Collapse>
      )
    }
    // 一般表单
    return (
      <div>
        {title && <h3>{title}</h3>}
        <FormDom {...formDomProps} />
      </div>
    )
  }, [formType, formDatas, title])

  return (
    <div style={{ flex: 1 }}>
      {renderForm}
    </div>
  )
}

export default ProForm