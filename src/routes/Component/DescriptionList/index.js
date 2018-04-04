import React from 'react';
import DescriptionList from '../../../components/DescriptionList';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

const { Description } = DescriptionList;

export default () => (
  <PageHeaderLayout title="描述列表" content="成组展示多个只读字段，常见于详情页的信息展示。">
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
  </PageHeaderLayout>
);
