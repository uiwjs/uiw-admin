import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';
import Ellipsis from '../../../components/Ellipsis';
import styles from './index.less';

export default class EllipsisElements extends Component {
  render() {
    return (
      <PageHeaderLayout title="Ellipsis文本自动省略号" content="文本过长自动处理省略号，支持按照文本长度和最大行数两种方式截取。">
        <div className={styles.box}>
          <div className={styles.box}>
            <h3> 通过设置 length 属性指定文本最长长度，如果超过这个长度会自动截取。</h3>
            <p>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气</p>
            <Ellipsis length={10}>亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>通过设置 tootip 属性,当鼠标移动到省略文本处可查看全部文本。</h3>
            <p>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气</p>
            <Ellipsis length={10} tooltip={true}>亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
          </div>
        </div>
        <div className={styles.box}>
          <div>
            <h3>通过设置 lines 属性指定文本行数。</h3>
            <p>原始文本：亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气</p>
            <div style={{ width: 200 }}>
              <Ellipsis lines={3} >亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气亮金大气</Ellipsis>
            </div>
          </div>

        </div>
      </PageHeaderLayout>
    );
  }
}