import { Outlet, KktproPageProps } from '@kkt/pro';
import Menu from '../Menu';
import Navbar from '../Navbar';
import { Wrapper, Main, Body } from './style';
import '@wcj/dark-mode';

export default function Layout(props: KktproPageProps) {
  return (
    <Wrapper className="wmde-markdown-var">
      <Navbar />
      <Main>
        <Body>
          <Menu />
          <div style={{ paddingLeft: 210, paddingTop: 58, height: '100%' }}>
            <Outlet />
          </div>
        </Body>
      </Main>
    </Wrapper>
  );
}
