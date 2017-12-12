import React, { Component } from 'react';
import { Card } from 'uiw';
import AvatarList from '../../../components/AvatarList';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

export default () => (
  <PageHeaderLayout title="头像列表" content="一组用户头像，常用在项目/团队成员列表。可通过设置 size 属性来指定头像大小。">
    <Card title="小尺寸的头像" noHover={true} style={{ marginBottom: 16 }}>
      <AvatarList size="small">
        <AvatarList.Item src="https://avatars1.githubusercontent.com/u/23475830?s=96&v=4" tips="avatar" onClick={(e) => {
          console.log(e)
        }} />
        <AvatarList.Item />
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
      </AvatarList>
    </Card>
    <Card title="默认尺寸和大尺寸" noHover={true}>
      <AvatarList>
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" tips="avatar" onClick={(e) => {
          console.log(e)
        }} />
        <AvatarList.Item />
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
      </AvatarList>
      <AvatarList size="large">
        <AvatarList.Item src="https://avatars0.githubusercontent.com/u/6764390?s=200&v=4" tips="avatar" onClick={(e) => {
          console.log(e)
        }} />
        <AvatarList.Item src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4" />
        <AvatarList.Item src="https://raw.githubusercontent.com/github/explore/fd96fceccf8c42c99cbe29cf0f8dcc4736fcb85a/topics/nodejs/nodejs.png" />
      </AvatarList>
    </Card>
  </PageHeaderLayout>
);