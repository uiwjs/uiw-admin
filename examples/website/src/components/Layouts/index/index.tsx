import { Outlet, KktproPageProps } from '@kkt/pro';
import Menu from '../Menu';
import Navbar from '../Navbar';
import { createGlobalStyle } from 'styled-components';
import { Wrapper, Main, Body } from './style';
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
  return (
    <Wrapper className="wmde-markdown-var">
      <GlobalStyle />
      <Navbar />
      <Main>
        <Body>
          <Menu />
          <div style={{ paddingLeft: 240, paddingTop: 58, height: '100%' }}>
            <Outlet />
          </div>
        </Body>
      </Main>
    </Wrapper>
  );
}
