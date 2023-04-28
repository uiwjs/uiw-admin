import styled, { css } from 'styled-components';
import { NavLink } from '@kkt/pro';

export const Wrap = styled.div`
  padding: 100px 0 50px;
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  h1 {
    font-size: 100px;
    text-shadow: 0 10px 20px rgba(22, 119, 255, 0.15);
    background: linear-gradient(30deg, #90d5ff 30%, #65a5ff);
    -webkit-background-clip: text;
    background-clip: text;
    font-family: Alibaba-PuHuiTi, Gill Sans, Gill Sans MT, Calibri, Trebuchet MS,
      sans-serif;
    color: #83cdf8;
  }
  p {
    font-size: 20px;
    line-height: 1;
    margin: 30px 0;
    a {
      color: var(--color2);
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const defaultBtn = (active?: boolean) => {
  const background = active ? `var(--color2)` : 'transparent';
  const color = active ? '#fff' : 'var(--color2)';
  return css`
    text-decoration: none;
    font-size: 18px;
    color: var(--color-fg-default);
    padding: 2px 15px;
    border-radius: 3px;
    height: 50px;
    width: 150px;
    border-radius: 25px;
    background-color: ${background};
    border: 1px solid var(--color2);
    color: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    margin: 0 20px;
    &:hover {
      opacity: 1;
    }
  `;
};

export const LinkMenu = styled(NavLink)`
  ${() => defaultBtn(true)}
`;

export const LinkA = styled.a`
  ${() => defaultBtn()}
`;

export const Footer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
  border-top: 1px solid var(--color-border-muted);
  padding-top: 50px;
  h3 {
    font-size: 30px;
    margin: 0;
  }
  p {
    margin: 15px;
  }
`;
