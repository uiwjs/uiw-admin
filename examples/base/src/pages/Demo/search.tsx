import React from 'react';
import { Form, Input, Row, Col, Button } from 'uiw'
const Search = () => {
  return (
    <Form
      onSubmit={({ initial, current }) => {
        console.log('-->>', initial, current);
      }}
      fields={{
        name: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          inline: true,
          label: '姓名',
          children: <Input />
        },
        age: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          inline: true,
          label: '名字',
          children: <Input />
        },
        address: {
          labelClassName: 'fieldLabel',
          labelStyle: { width: 60 },
          inline: true,
          label: '地址',
          children: <Input />
        },
      }}
    >
      {({ fields, state, canSubmit }) => {
        console.log('fields:', state);
        return (
          <div>
            <Row gutter={10} style={{ marginBottom: 10 }}>
              <Col>{fields.name}</Col>
              <Col>{fields.age}</Col>
              <Col>{fields.address}</Col>
            </Row>
            <Row gutter={10}>
              <Col />
              <Col fixed align="bottom">
                <Button disabled={!canSubmit()} type="primary" htmlType="submit">搜索</Button>
                <Button type="danger"> 重置 </Button>
              </Col>
            </Row>
          </div>
        )
      }}
    </Form>
  );
}
export default Search