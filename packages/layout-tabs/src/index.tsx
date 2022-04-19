import React from 'react';
import { Tabs, Icon } from 'uiw';
import { RoutersProps } from '@uiw-admin/router-control';
import { getRoutesList, getMatch, getMatchRender } from './utils';
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
    (RoutersProps & { location: Location; isMatch: boolean })[]
  >([]);

  const routeListData = React.useMemo(() => getRoutesList(routes), [routes]);
  const Current = getMatch(routeListData, location);

  React.useEffect(() => {
    if (!Current.current) {
      // 没找到跳转
      navigate('/404');
      return;
    }
    if (Current.current && Current.current.redirect) {
      navigate(Current.current.redirect);
      return;
    }
    const curr = getMatchRender(pathArr, location, Current.isMatch);
    // 还有一种可能  /dom/:id 中的 id 值不一样，这种情况下需要替换

    if (!curr) {
      setPathArr((pre) =>
        pre
          .concat([{ ...Current.current, isMatch: Current.isMatch, location }])
          .filter((item) => !!item),
      );
    } else if (
      curr &&
      Current.isMatch &&
      (curr.location.pathname !== location.pathname ||
        curr.location.search !== location.search)
    ) {
      setPathArr((pre) => {
        return pre.map((item) => {
          if (curr.location.pathname === item.location.pathname) {
            return {
              ...item,
              location,
            };
          }
          return item;
        });
      });
    }
  }, [location.pathname]);

  React.useMemo(() => {
    const tabData = [...pathArr].map((item) => {
      if (item.path && Current.isMatch) {
        const match = matchPath({ path: item.path }, location.pathname);
        if (match) {
          item.location = location;
        }
      } else if (item.path === location.pathname) {
        item.location = location;
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
          console.log(item.location.pathname);
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
                  {item.location.pathname}
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
          const match = item.location.pathname === location.pathname;
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
