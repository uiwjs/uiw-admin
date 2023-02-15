import React from 'react';
import { Breadcrumb } from 'uiw';
import { useLocation, useNavigate } from 'react-router-dom';
import { BreadcrumbMap } from './../utils';
import { matchPath } from 'react-router';
import { onNavigate } from '../Menu';
import { RoutersProps } from '@uiw-admin/router-control';

import './index.css';
interface BreadProps {
  routeMap: BreadcrumbMap;
  sideMenusMap: {
    sideMenus: Map<string, RoutersProps[]>;
    flat: Map<string, string>;
    flatSide: Map<string, string>;
  };
}
const Bread = (props: BreadProps) => {
  const { routeMap, sideMenusMap } = props;
  const navigate = useNavigate();

  const location = useLocation();
  const domList = React.useMemo(() => {
    const result = routeMap.breadcrumb.get(location.pathname);
    if (!result) {
      let paths;
      routeMap.breadcrumb.forEach((_, key) => {
        if (matchPath(key, location.pathname)) {
          paths = key;
        }
      });
      if (paths) {
        return routeMap.breadcrumb.get(paths) || [];
      }
      return [];
    }
    return result;
  }, [location.pathname]);
  return (
    <Breadcrumb className="uiw-admin-breadcrumb">
      {domList?.map((item, index) => {
        return (
          <Breadcrumb.Item
            onClick={() => {
              // if(index===(domList.length-1)){
              // }
              // 进入子集当前菜单不显示 点击当前菜单不显示
              if (item.side && item.path) {
                const parentPath = sideMenusMap.flatSide.get(item.path);
                if (parentPath) {
                  const result = onNavigate(item as any, navigate, {
                    location,
                  });
                  if (!result) {
                    return;
                  }
                  navigate(parentPath, { replace: true });
                }
                // 存在子集菜单，点击父级面包屑跳转到第一个子集菜单
              } else if (item.path) {
                if (item && item?.routes && item?.routes?.length > 0) {
                  const firstChildPath = item.routes[0].path;
                  !!firstChildPath &&
                    navigate(firstChildPath, { replace: true });
                }
              }
            }}
            key={index}
          >
            {item.name}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};

export default Bread;
