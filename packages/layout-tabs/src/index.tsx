import React from 'react';
import { Tabs, Icon } from 'uiw';
import { RoutersProps } from '@uiw-admin/router-control';
import { getRoutesList, getRender } from './utils';
import { matchPath } from 'react-router';
import './styles/index.css';
import { useNavigate, useLocation, Location } from 'react-router-dom';

export interface LayoutTabsProps {
  /** 子集路由 */
  routes: RoutersProps[];
}
const LayoutTabs = (props: LayoutTabsProps) => {
  const { routes } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [pathArr, setPathArr] = React.useState<
    (RoutersProps & { location: Location })[]
  >([]);

  const routeListData = getRoutesList(routes);
  const Current = getRender(routeListData, location) as RoutersProps;

  React.useEffect(() => {
    if (!Current) {
      // 没找到跳转
      navigate('/404');
      return;
    }
    if (Current && Current.redirect) {
      navigate(Current.redirect);
      return;
    }
    const curr = getRender(pathArr, location);
    if (!curr) {
      setPathArr((pre) =>
        pre.concat([{ ...Current, location }]).filter((item) => !!item),
      );
    }
  }, [location.pathname]);

  React.useMemo(() => {
    const tabData = [...pathArr].map((item) => {
      if (item.path) {
        const match = matchPath({ path: item.path }, location.pathname);
        if (match) {
          item.location = location;
        }
      }
      return item;
    });
    setPathArr(() => [...tabData]);
  }, [location.search]);

  const onDelete = (
    event: React.MouseEvent<'span', MouseEvent>,
    index: number,
    item: RoutersProps,
  ) => {
    event.stopPropagation();
    event.preventDefault();
    const lg = pathArr.length - 1;
    // 判断当前是第几个 index
    // 默认删除当前项 展示后一项
    // 当后一项不存在时 取前一项
    // 当前后项都不存在则不进行删除
    // 如果删除的项不是当前打开项，不做跳转
    const match = matchPath({ path: item.path as string }, location.pathname);
    if (!match) {
      setPathArr((arr) => arr.filter((_, ind) => ind !== index));
      return;
    }
    let isUpdate = false;
    let tabs;
    if (lg > index && match) {
      // 后一项存在
      tabs = pathArr.find((_, ind) => ind === index + 1);
      isUpdate = true;
    } else if (lg === index && index > 0 && match) {
      // 前一项存在
      tabs = pathArr.find((_, ind) => ind === index - 1);
      isUpdate = true;
    } else if (match) {
      isUpdate = true;
    }
    if (isUpdate) {
      setPathArr((arr) => arr.filter((_, ind) => ind !== index));
    }
    if (tabs) {
      navigate(`${tabs.path}${tabs.location.search}`, {
        state: tabs.location.state,
        replace: true,
      });
    }
  };

  return (
    <div className="uiw-layout-tabs-warp">
      <Tabs
        type="card"
        activeKey={location.pathname}
        onTabClick={(keys) => {
          const tabs = pathArr.find((item) => item.location.pathname === keys);
          if (tabs && location.pathname !== keys) {
            navigate(`${keys}${tabs.location.search}`, {
              state: tabs.location.state,
              replace: true,
            });
          }
        }}
      >
        {pathArr.map((item, index) => {
          return (
            <Tabs.Pane
              key={item.location.pathname}
              label={
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {item.name}
                  {pathArr.length > 1 ? (
                    <Icon
                      type="close"
                      tagName="span"
                      style={{ marginLeft: 10 }}
                      onClick={(event) => onDelete(event, index, item)}
                    />
                  ) : (
                    <React.Fragment />
                  )}
                </div>
              }
            />
          );
        })}
      </Tabs>
      <div className="uiw-layout-tabs-body">
        {pathArr.map((item) => {
          const match = matchPath(
            { path: item.path as string },
            location.pathname,
          );
          return (
            <div
              key={item.location.pathname}
              style={{
                display: match ? 'block' : 'none',
                overflow: 'auto',
              }}
            >
              {item.element}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default LayoutTabs;
