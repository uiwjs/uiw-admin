import React, { useRef, forwardRef } from 'react';
import QuickForm, { RenderCallBackProps } from 'component/QuickForm'
import { ProDrawer } from '@uiw-admin/components'
import { Checkbox, Col } from 'uiw'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from '@uiw-admin/models';
// import { insert, update } from 'servers/demo'
// import useSWR from 'swr'

interface DetailProps {
  updateData?: any
}

// 自定义组件
const NewCheckBox = forwardRef(({ name, onChange, onBlur }: RenderCallBackProps, ref) => {
  return (
    <Col>
      <Checkbox value="checkbox" name={name} onChange={onChange} onBlur={onBlur} />
    </Col>
  )
})

const Detail = ({ updateData }: DetailProps) => {
  const formRef = useRef<any>()
  const dispatch = useDispatch<Dispatch>();
  const { demo: { drawerVisible, tableType, queryInfo } } = useSelector((state: RootState) => state);

  const onClose = () => dispatch({ type: "demo/clean" })

  return (
    <ProDrawer
      width={800}
      title={tableType === 'add' ? '新增' : tableType === 'edit' ? '编辑' : '查看'}
      visible={drawerVisible}
      onClose={onClose}
      buttons={
        [
          {
            label: "保存",
            onPress: async () => {
              await formRef?.current?.trigger()
              const errors = await formRef?.current?.errors()
              const values = await formRef?.current?.getValues()
              if (errors) return
              dispatch({ type: tableType === 'add' ? "demo/insert" : "demo/update", payload: values })
            }
          }
        ]
      }
    >
      <QuickForm
        ref={formRef}
        title="基础信息"
        onItemChange={async (name, value) => console.log('name', name, 'value', value)}
        formDatas={[
          {
            type: 'input',
            name: 'firstName',
            label: "姓氏",
            initValue: queryInfo?.firstName,
            attributes: {
              placeholder: '请输入姓氏',
            },
            rules: { required: '请输入姓氏' },
          },
          {
            type: 'input',
            name: 'lastName',
            label: "名字",
            initValue: queryInfo?.lastName,
            attributes: {
              placeholder: '请输入名字',
            },
            rules: { required: '请输入名字' },
          },
          {
            type: 'select',
            name: 'select',
            label: "年龄",
            initValue: queryInfo?.select,
            options: [
              { value: 1, label: '苹果' },
              { value: 2, label: '西瓜' },
              { value: 3, label: '香蕉' },
              { value: 4, label: '东北大冻梨' },
            ],
            attributes: {
              placeholder: '请选择水果',
            }
          },
          {
            type: "render",
            label: "自定义组件",
            name: "id1",
            rules: { required: '自定义组件' },
            render: (attr) => <NewCheckBox {...attr} />
          },
          {
            type: 'radio',
            name: 'id2',
            label: "性别",
            initValue: queryInfo?.id2,
            options: [
              { value: 1, label: '男' },
              { value: 2, label: '女' },
              { value: 3, label: '人妖' },
            ],
          },
          {
            type: 'checkbox',
            name: 'id3',
            label: "菜系",
            initValue: queryInfo?.id2,
            options: [
              { value: 1, label: '四川菜' },
              { value: 2, label: '湖北菜' },
              { value: 3, label: '西北菜' },
            ],
          },
        ]}
      />
    </ProDrawer>
  )
}

export default Detail