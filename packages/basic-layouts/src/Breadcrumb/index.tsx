import React from 'react';
import { Breadcrumb } from 'uiw';
import { useLocation } from 'react-router-dom';
import { BreadcrumbMap } from './../utils';
interface BreadProps {
  routeMap: BreadcrumbMap;
}
const Bread = (props: BreadProps) => {
  const { routeMap } = props;
  const location = useLocation();
  const domList = routeMap.breadcrumb.get(location.pathname) || [];
  return (
    <Breadcrumb>
      {domList?.map((item, index) => {
        return <Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>;
      })}
    </Breadcrumb>
  );
};

export default Bread;
