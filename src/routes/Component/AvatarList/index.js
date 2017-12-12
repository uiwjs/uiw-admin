import React, { Component } from 'react';
import AvatarList from '../../../components/AvatarList';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

export default () => (
  <PageHeaderLayout title="头像列表" content="一组用户头像，常用在项目/团队成员列表。可通过设置 size 属性来指定头像大小。">
    <AvatarList size="small">
      <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" tips="avatar" onClick={(e) => {
        console.log(e)
      }} />
      <AvatarList.Item />
      <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
    </AvatarList>
    <AvatarList>
      <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" tips="avatar" onClick={(e) => {
        console.log(e)
      }} />
      <AvatarList.Item />
      <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
    </AvatarList>
    <AvatarList size="large">
      <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" tips="avatar" onClick={(e) => {
        console.log(e)
      }} />
      <AvatarList.Item />
      <AvatarList.Item src="https://avatars2.githubusercontent.com/u/1680273?s=40&v=4" />
    </AvatarList>
  </PageHeaderLayout>
);