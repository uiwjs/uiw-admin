import { Outlet } from 'react-router-dom';
import { Layout, Affix } from 'uiw';
import pkg from 'uiw-admin/package.json';
import styles from './index.module.less';
import SiderMenu from '../SideMenu';
// import Nav from '../components/Nav';
// import { ThemeContext } from '../contexts';

const { Header, Sider, Content } = Layout;
export interface ComponentsProps {
  siderMenu?: boolean;
}

export default function Components(props: ComponentsProps) {
  return (
    <Layout className={styles.layout}>
      <Affix offsetTop={0} style={{ zIndex: 999 }}>
        <Header className={styles.header} style={{ display: 'flex', alignItems: 'center' }}>
          <svg viewBox="0 0 20 20" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path
                d="M5.70480219,0 L10.4096044,3.41834667 L8.61252986,8.94934776 L2.79707453,8.94934776 L1,3.41834667 L5.70480219,0 Z M5.70480219,20 L1,16.5816533 L2.79707453,11.0506522 L8.61252986,11.0506522 L10.4096044,16.5816533 L5.70480219,20 Z M18.8709653,12.9678909 L13.3400514,14.7649021 L9.92167142,10.0599974 L13.3399103,5.35519519 L18.8708781,7.15237223 L18.8709653,12.9678909 Z"
                fill="#FFFFFF"
              />
            </g>
          </svg>
          <div className={styles.title}>
            uiw admin<sup>{pkg.version}</sup>
          </div>
        </Header>
      </Affix>
      <Layout className={styles.layoutWrap}>
        <Sider width={260} className={styles.layoutSider}>
          <SiderMenu style={{ width: 260, height: 'calc(100vh - 53px)' }}/>
        </Sider>
        <Content style={{ padding: 20 }} className={styles.layoutContent}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
