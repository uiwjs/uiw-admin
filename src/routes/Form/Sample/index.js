import React from 'react';
import { Form, Input } from 'uiw';
import PageHeader from '../../../components/PageHeader';

const FormItem = Form.Item;
export default class SampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      confirmDirty: false,
    };
  }
  render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
      },
    };
    return (
      <div>
        <PageHeader
          title="基础表单"
          action={<a href="">编辑</a>}
          content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景"
        />
        {/* <div>
          <Form>
            <FormItem
              label="可选字段"
              labelFor="basic-input-inline"
              help={<span>在上面的字段中输入一个值</span>}
            >
              <Input id="basic-input-inline" type="text"/>
            </FormItem>
          </Form>
        </div> */}
      </div>
    );
  }
}
