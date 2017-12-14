import React, { Component } from 'react';
import DescriptionList from '../../../components/DescriptionList';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

const { Description } = DescriptionList;

export default () => (
  <PageHeaderLayout title="描述列表" content="成组展示多个只读字段，常见于详情页的信息展示。">
    <DescriptionList title="标题" column={3} layout="vertical">
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
      </Description>
      <Description term="UIW React">
        text-indent 属性规定文本块中首行文本的缩进。注释：允许使用负值。如果使用负值，那么首行会被缩进到左边。注意：在 CSS 2.1 之前，text-indent 总是继承计算值，而不是声明值。
    </Description>
    </DescriptionList>
  </PageHeaderLayout>
);