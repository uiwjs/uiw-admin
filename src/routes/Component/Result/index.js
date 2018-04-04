import React from 'react';
import { Icon, Card, Button } from 'uiw';
import Result from '../../../components/Result';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import AvatarList from '../../../components/AvatarList';

export default () => (
  <PageHeaderLayout title="处理结果" content="结果页用于对用户进行的一系列任务处理结果进行反馈。">
    <Card bordered={false}>
      <Result
        icon="circle-check"
        title="温馨提示"
        description="“我爱办公”一个为爱共享的免费租赁平台！"
        extra="免费注册、发布、管理您的房源"
        actions={[{ text: '立即预订', icon: 'like-o', onClick: () => { } }, { text: '免费预约', type: 'primary', icon: 'heart-off', onClick: () => { } }]}
      />
    </Card>
    <Card bordered={false} style={{ marginTop: 20, width: 600, marginBottom: 20 }}>
      <Result
        icon={<Icon type="heart-on" />}
        title="温馨提示"
        description="“我爱办公”一个为爱共享的免费租赁平台！"
        extra="免费注册、发布、管理您的房源"
        actions={<Button block type="primary"> 立即预订 <Icon type="heart-on" /> </Button>}
      >
        <Card title="小尺寸的头像" noHover style={{ marginBottom: 16 }}>
          <AvatarList size="small">
            <AvatarList.Item
              src="https://avatars1.githubusercontent.com/u/23475830?s=96&v=4"
              tips="avatar"
              onClick={() => {
                // console.log(e);
              }}
            />
            <AvatarList.Item />
            <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
          </AvatarList>
        </Card>
      </Result>
    </Card>
  </PageHeaderLayout>
);
