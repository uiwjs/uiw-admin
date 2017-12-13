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
        <Card title="通过设置 length 属性指定文本最长长度，如果超过这个长度会自动截取。" noHover={true} style={{ marginBottom: 16 }}>
          <div>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气</div>
          <Ellipsis length={10}>亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
        </Card>
        <Card title="通过设置 tootip 属性,当鼠标移动到省略文本处可查看全部文本。" noHover={true} style={{ marginBottom: 16 }}>
          <div>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气</div>
          <Ellipsis length={10} tooltip={true}>亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
        </Card>
        <Card title="通过设置 tootip 属性,当鼠标移动到省略文本处可查看全部文本。" noHover={true} style={{ marginBottom: 16 }}>
          <div>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气</div>
          <div style={{ width: 200 }}>
            <Ellipsis lines={3} >亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
          </div>
        </Card>
      </PageHeaderLayout>
    );
  }
}