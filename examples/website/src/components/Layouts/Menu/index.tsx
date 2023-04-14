import { useEffect, useState } from 'react';
import { useLocation } from '@kkt/pro';
import {
  MenusConfigObject,
  menusDocsConfig,
  menusComponentsConfig,
} from '@/menus';
import { Divider, MenuLabel, MenuA, Wrapper, MenuWrapper } from './style';

export interface MenuData {
  divider?: boolean;
  path?: string;
  size?: string | 'small';
  name: string;
}

const getRouters = (data: MenusConfigObject[] = [], path: string = '') => {
  const result: React.ReactNode[] = [];
  data.forEach((item, idx) => {
    if (item.path) {
      if (item.target || /^https?:\/\//.test(path)) {
        result.push(
          <MenuA
            key={idx + (item.path || '')}
            href={item.path}
            target={item.target}
          >
            {item.title}
          </MenuA>,
        );
      } else {
        result.push(
          <MenuLabel
            key={idx + (item.path || '')}
            to={item.path}
            title={item.title}
          >
            {item.title}
          </MenuLabel>,
        );
      }
    } else {
      result.push(
        <Divider key={idx + (item.path || '')}>{item.title}</Divider>,
      );
    }
  });
  return result;
};

const Menu = () => {
  const { pathname } = useLocation();
  const [result, setResult] = useState<any>();
  useEffect(() => {
    if (/docs/.test(pathname)) {
      setResult(getRouters(menusDocsConfig, pathname));
    }
    if (/components/.test(pathname)) {
      setResult(getRouters(menusComponentsConfig, pathname));
    }
  }, [pathname]);

  return (
    <Wrapper>
      <MenuWrapper>{result}</MenuWrapper>
    </Wrapper>
  );
};

export default Menu;
