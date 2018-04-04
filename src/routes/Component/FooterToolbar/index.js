import React from 'react';
import { Card, Button, Icon } from 'uiw';
import FooterToolbar from '../../../components/FooterToolbar';
import AvatarList from '../../../components/AvatarList';
import DescriptionList from '../../../components/DescriptionList';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

const { Description } = DescriptionList;

export default () => (
  <PageHeaderLayout title="底部工具栏" content="固定在底部的工具栏">
    <DescriptionList title="订单详情" column={3} layout="vertical">
      <Description term="取货单号">
        1000000000
      </Description>
      <Description term="状态">
        已取货
      </Description>
      <Description term="销售单号">
        1234123421
      </Description>
      <Description term="子订单">
        3214321432
      </Description>
      <Description term="用户姓名">
        我爱办公
      </Description>
      <Description term="联系电话">
        18100000000
      </Description>
      <Description term="取货地址">
        浙江省杭州市西湖区万塘路18号
      </Description>
    </DescriptionList>
    <Card title="默认尺寸和大尺寸" noHover style={{ marginBottom: 74, marginTop: 16 }}>
      <AvatarList size="small">
        <AvatarList.Item src="https://avatars1.githubusercontent.com/u/23475830?s=96&v=4" tips="avatar" />
        <AvatarList.Item />
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
      </AvatarList>
      <AvatarList>
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" tips="avatar" />
        <AvatarList.Item />
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
      </AvatarList>
      <AvatarList size="large">
        <AvatarList.Item src="https://avatars0.githubusercontent.com/u/6764390?s=200&v=4" tips="avatar" />
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4" />
        <AvatarList.Item src="https://raw.githubusercontent.com/github/explore/fd96fceccf8c42c99cbe29cf0f8dcc4736fcb85a/topics/nodejs/nodejs.png" />
      </AvatarList>
    </Card>
    <FooterToolbar
      extra={<Icon type="uiw" style={{ fontSize: 24 }} />}
      style={{ width: 'calc(100% - 290px)' }}
      actions={(<div><Button> 立即预订 <Icon type="heart-off" /> </Button> <Button type="primary"> 立即预订 <Icon type="heart-on" /> </Button></div>)}
    >
      <div style={{ textAlign: 'center', fontSize: 12 }}>
        <span>&copy;<a href="https://www.woaibangong.com" style={{ color: '#3d90f2' }}>我爱办公</a></span>&nbsp;&nbsp;&nbsp;&nbsp;<span>App下载</span>
      </div>
    </FooterToolbar>
  </PageHeaderLayout>
);
