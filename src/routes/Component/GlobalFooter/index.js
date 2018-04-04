import React from 'react';
import { Icon } from 'uiw';
import GlobalFooter from '../../../components/GlobalFooter';
import PageHeaderLayout from '../../../layouts/PageHeaderLayout';

export default () => (
  <PageHeaderLayout title="全局页脚" content="页脚属于全局导航的一部分，作为对顶部导航的补充，通过传递数据控制展示内容。">
    <GlobalFooter
      links={[{
        id: '1',
        text: '我爱办公',
        href: 'https://www.woaibangong.com',
        target: '_blank',
        icon: (<Icon type="uiw" />),
      }, {
        id: '2',
        text: 'APP下载',
        href: 'https://download.woaibangong.com',
        target: '_blank',
        icon: (<Icon type="appstore" />),
      }, {
        id: '3',
        text: 'Smart管理平台',
        href: 'https://smart.woaibangong.com',
        target: '_blank',
        icon: (<Icon type="android" />),
      }]}
      copyright="我爱办公"
    />
    <br />
    <GlobalFooter
      links={<a href="https://uiw-react.github.io/#/cn/quick-start">UIW</a>}
      copyright={(<p>Copyright &copy; 亮金信息</p>)}
    >
      <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
        <p style={{ display: 'inline-block' }}>联系我们</p>
        <p style={{ display: 'inline-block' }}>产品介绍</p>
        <p style={{ display: 'inline-block' }}>合作伙伴</p>
      </div>
    </GlobalFooter>
  </PageHeaderLayout>
);
