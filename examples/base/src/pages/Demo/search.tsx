import React from 'react';
import { Form, Input, Row, Col, Button } from 'uiw'

interface SearchProps {
  updateData: any;
}

const Search = (props: SearchProps) => {
  const { updateData } = props
  return (
    <Form
      onSubmit={({ initial, current: fliter }) => updateData({ current: 1, filter: fliter })}
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
      {({ fields, state, canSubmit, resetForm }) => {
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
                <Button type="danger" onClick={() => { resetForm(); updateData({ filter: {} }) }}> 重置 </Button>
              </Col>
            </Row>
          </div>
        )
      }}
    </Form>
  );
}
export default Search