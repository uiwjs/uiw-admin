import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const Main = styled.main`
  box-sizing: border-box;
  display: block;
  height: 100%;
  overflow: auto;
  scroll-behavior: smooth;
`;

export const Body = styled.div<{ isHome?: boolean }>`
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 1;
  ${({ isHome }) => {
    return (
      isHome &&
      css`
        max-width: 100%;
      `
    );
  }}
`;

export const OutletWrap = styled.div<{ isHome?: boolean }>`
  padding-top: 58px;
  height: 100%;
  padding-left: 240px;
  ${({ isHome }) => {
    return (
      isHome &&
      css`
        padding-left: 0;
      `
    );
  }}
`;
