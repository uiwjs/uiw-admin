import React, { PureComponent } from 'react';
import { Icon, Button, Card } from 'uiw';
import Result from '../../components/Result';

export default class Error extends PureComponent {
  render() {
    const extra = (
      <div>
        <div style={{ fontSize: 16, color: 'rgba(0, 0, 0, 0.85)', fontWeight: '500', marginBottom: 16 }}>
          您提交的内容有如下错误：
        </div>
        <div style={{ marginBottom: 16 }}>
          <Icon style={{ color: '#f5222d', marginRight: 8 }} type="circle-close-o" />您的账户已被冻结
          <a style={{ marginLeft: 16 }}>立即解冻 <Icon type="right" /></a>
        </div>
        <div>
          <Icon style={{ color: '#f5222d', marginRight: 8 }} type="circle-close-o" />您的账户还不具备申请资格
          <a style={{ marginLeft: 16 }}>立即升级 <Icon type="right" /></a>
        </div>
      </div>
    );

    const actions = <Button type="primary">返回修改</Button>;
    return (
      <div style={{ margin: 15 }}>
        <Card bordered={false}>
          <Result
            icon="circle-close-o"
            title="提交失败"
            description="请核对并修改以下信息后，再重新提交。"
            style={{ marginTop: 48, marginBottom: 16 }}
            extra={extra}
            actions={actions}
          />
        </Card>
      </div>
    );
  }
}
