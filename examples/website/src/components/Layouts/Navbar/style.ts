import styled from 'styled-components';
import { NavLink } from '@kkt/pro';

export const Wrapper = styled.div`
  border-bottom: 1px solid var(--color-border-muted);
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  padding: 0 12px;
  gap: 12px;
  top: 0;
  width: 100%;
  z-index: 9;
  background-color: var(--color-canvas-default);
  /* background-color: hsla(var(--color-header-bg) / 75%);
  backdrop-filter: saturate(180%) blur(0.4rem); */
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  height: 58px;
`;

export const Logo = styled(NavLink)`
  color: currentColor;
  padding: 0 0 0 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

export const Version = styled.span`
  font-size: 12px;
  margin-left: 10px;
  font-weight: normal;
  position: relative;
  top: -5px;
`;

export const HeaderTools = styled.div`
  margin-right: 10px;
  font-size: 20px;
  margin-left: 20px;
`;

export const LinkMenu = styled(NavLink)`
  text-decoration: none;
  font-size: 16px;
  color: var(--color-fg-default);
  padding: 2px 15px;
  border-radius: 3px;
  &:first-child {
    margin-left: 0;
  }
  &.active {
    color: var(--font-color);
    background: var(--color1);
  }
`;
export const AMenu = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: var(--color-fg-default);
  padding: 2px 15px;
  border-radius: 3px;
  &:first-child {
    margin-left: 0;
  }
  &.active {
    color: var(--font-color);
    background: var(--color1);
  }
`;
