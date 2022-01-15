import React from 'react';
import { ProDrawer } from '@uiw-admin/components'
import { Form, Input, Select, Row, Col, Button } from 'uiw'
import { useSelector, useDispatch } from 'react-redux';
import { RootState, Dispatch } from '@uiw-admin/models';


const Detail = () => {
  const dispatch = useDispatch<Dispatch>();
  const { demo: { drawerVisible } } = useSelector((state: RootState) => state);


  const options = [
    { value: 1, label: '苹果' },
    { value: 2, label: '西瓜' },
    { value: 3, label: '香蕉' },
    { value: 4, label: '东北大冻梨' },
  ]

  const updateData = (payload: any) => {
    dispatch({
      type: 'demo/updateState',
      payload,
    });
  };

  return (
    <ProDrawer
      width={800}
      title="新增"
      visible={drawerVisible}
      onClose={() => updateData({ drawerVisible: false })}
      buttons={[
        {
          label: "取消",
          type: "danger",
          onPress: () => updateData({ drawerVisible: false })
        },
      ]}
    >
      <Form
        onSubmit={({ initial, current }) => {
          console.log('current', current);
        }}
        fields={{
          firstName: {
            labelClassName: 'fieldLabel',
            labelStyle: { width: 60 },
            inline: true,
            label: '姓氏',
            initialValue: '周',
            children: <Input />
          },
          lastName: {
            labelClassName: 'fieldLabel',
            labelStyle: { width: 60 },
            initialValue: '先生',
            inline: true,
            label: '名字',
            children: <Input />
          },
          email: {
            labelClassName: 'fieldLabel',
            labelStyle: { width: 60 },
            validator: (currentValue) => {
              return currentValue && currentValue.length < 2 ? 'Password must be 8+ characters' : null;
            },
            initialValue: '42309872@qq.com',
            inline: true,
            label: 'Email',
            children: <Input />
          },
          select: {
            labelClassName: 'fieldLabel',
            labelStyle: { width: 60 },
            initialValue: 4,
            inline: true,
            label: '选择器',
            children: (
              <Select>
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
              <Row gutter={10}>
                <Col />
                <Col fixed align="bottom"><Button disabled={!canSubmit()} type="primary" htmlType="submit">提交</Button></Col>
              </Row>
            </div>
          )
        }}
      </Form>
    </ProDrawer>
  )
}

export default Detail