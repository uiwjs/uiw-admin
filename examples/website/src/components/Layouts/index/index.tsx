import { Outlet, KktproPageProps, useLocation } from '@kkt/pro';
import Menu from '../Menu';
import Navbar from '../Navbar';
import { createGlobalStyle } from 'styled-components';
import { Wrapper, Main, Body, OutletWrap } from './style';
import '@wcj/dark-mode';

export const GlobalStyle = createGlobalStyle`
  [data-color-mode*='dark'], [data-color-mode*='dark'] body {
    --gradient-from: #1c1e20;
    --gradient-to: #0d1117;
    --color-rgb: 255 255 255;
  }
  [data-color-mode*='light'], [data-color-mode*='light'] body {
    --gradient-from: #e5eaf0;
    --gradient-to: #fff;
    --color-rgb: 0 0 0;
  }
`;

export default function Layout(props: KktproPageProps) {
  const { pathname } = useLocation();
  const isHome: boolean = pathname === '/home';

  return (
    <Wrapper className="wmde-markdown-var">
      <GlobalStyle />
      <Navbar />
      <Main>
        <Body isHome={isHome}>
          {!isHome && <Menu />}
          <OutletWrap isHome={isHome}>
            <Outlet />
          </OutletWrap>
        </Body>
      </Main>
    </Wrapper>
  );
}
