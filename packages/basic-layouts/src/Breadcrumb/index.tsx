import React from 'react';
import { Breadcrumb } from 'uiw';
import { useLocation } from 'react-router-dom';
import { BreadcrumbMap } from './../utils';
import { matchPath } from 'react-router';

interface BreadProps {
  routeMap: BreadcrumbMap;
}
const Bread = (props: BreadProps) => {
  const { routeMap } = props;
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
    <Breadcrumb>
      {domList?.map((item, index) => {
        return <Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default Bread;
