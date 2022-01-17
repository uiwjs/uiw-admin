import React from 'react';
import { ProDrawer } from '@uiw-admin/components'
import { Form, Input, Select, Row, Col, Button, Notify } from 'uiw'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from '@uiw-admin/models';
import { insert, update } from 'servers/demo'
import useSWR from 'swr'

interface DetailProps {
  updateData?: any
}

const options = [
  { value: 1, label: '苹果' },
  { value: 2, label: '西瓜' },
  { value: 3, label: '香蕉' },
  { value: 4, label: '东北大冻梨' },
]

const Detail = (props: DetailProps) => {
  const { updateData } = props
  const dispatch = useDispatch<Dispatch>();
  const { demo: { drawerVisible, tableType, queryInfo, isView } } = useSelector((state: RootState) => state);

  const onClose = () => dispatch({ type: "demo/clean" })

  const { mutate } = useSWR([
    (tableType === 'add' && insert) || (tableType === 'edit' && update), { method: "POST", body: queryInfo }], {
    revalidateOnMount: false,
    revalidateOnFocus: false,
    onSuccess: (data) => {
      if (data && data.code === 200) {
        Notify.success({ title: data.message });
        onClose()
      }
    },
  })

  return (
    <ProDrawer
      width={800}
      title={tableType === 'add' ? '新增' : tableType === 'edit' ? '编辑' : '查看'}
      visible={drawerVisible}
      onClose={onClose}
    >
      <Form
        title="基础信息"
        onSubmit={({ initial, current }) => mutate()}
        onChange={({ initial, current }) => updateData({ queryInfo: { ...queryInfo, current } })}
        fields={{
          firstName: {
            labelClassName: 'fieldLabel',
            labelStyle: { width: 60 },
            inline: true,
            label: '姓氏',
            initialValue: queryInfo?.firstName,
            children: <Input disabled={isView} />
          },
          lastName: {
            labelClassName: 'fieldLabel',
            labelStyle: { width: 60 },
            initialValue: queryInfo?.lastName,
            inline: true,
            label: '名字',
            children: <Input disabled={isView} />
          },
          email: {
            labelClassName: 'fieldLabel',
            labelStyle: { width: 60 },
            validator: (currentValue) => {
              return currentValue && currentValue.length < 2 ? 'Password must be 8+ characters' : null;
            },
            initialValue: queryInfo?.email,
            inline: true,
            label: 'Email',
            children: <Input disabled={isView} />
          },
          select: {
            labelClassName: 'fieldLabel',
            labelStyle: { width: 60 },
            initialValue: queryInfo?.select,
            inline: true,
            label: '选择器',
            children: (
              <Select disabled={isView}>
                <Select.Option>请选择</Select.Option>
                {options.map(({ label, value }) => <Select.Option value={value} key={value}>{label}</Select.Option>)}
              </Select>
            ),
          },
        }}
      >
        {({ fields, state, canSubmit }) => {
          return (
            <div>
              <Row gutter={10} style={{ marginBottom: 10 }}>
                <Col>{fields.firstName}</Col>
                <Col>{fields.lastName}</Col>
                <Col>{fields.email}</Col>
              </Row>
              <Row gutter={10}>
                <Col>{fields.select}</Col>
              </Row>
              {!isView && (
                <Row gutter={10}>
                  <Col />
                  <Col fixed align="bottom"><Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button></Col>
                </Row>
              )}
            </div>
          )
        }}
      </Form>
    </ProDrawer>
  )
}

export default Detail