import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Card } from 'uiw';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import Ellipsis from '../../../components/Ellipsis';
import styles from './index.less';

export default class EllipsisElements extends Component {
  render() {
    return (
      <PageHeaderLayout title="Ellipsis文本自动省略号" content="文本过长自动处理省略号，支持按照文本长度和最大行数两种方式截取。">
        <Card className={styles.cardItem} title="通过设置 length 属性指定文本最长长度，如果超过这个长度会自动截取。" noHover={true}>
          <div>原始文本：曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。
          如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。
          如果非要在这份爱上加上一个期限，我希望是</div>
          <Ellipsis length={100}>曾经有一份真诚的爱情放在我面前，我没有珍惜，等我失去的时候我才后悔莫及，人世间最痛苦的事莫过于此。
          如果上天能够给我一个再来一次的机会，我会对那个女孩子说三个字：我爱你。
          如果非要在这份爱上加上一个期限，我希望是</Ellipsis>
        </Card>
        <Card className={styles.cardItem} title="通过设置 tootip 属性,当鼠标移动到省略文本处可查看全部文本。" noHover={true}>
          <div>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气</div>
          <Ellipsis length={10} tooltip={true}>亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
        </Card>
        <Card className={styles.cardItem} title="通过设置 tootip 属性,当鼠标移动到省略文本处可查看全部文本。" noHover={true}>
          <div>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气</div>
          <div style={{ width: 200 }}>
            <Ellipsis lines={3} >亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}