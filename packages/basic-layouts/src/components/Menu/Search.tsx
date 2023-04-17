import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getRoutesList } from '../../utils';
import { SearchSelect, SearchSelectOptionData } from 'uiw';
import { onNavigate } from './index';
import type { MenuProps } from './index';

import pinyin from 'pinyin';

type ValueType = string | number;

const SearchMenus = (props: MenuProps) => {
  const { routes = [] } = props || {};
  const location = useLocation();
  const navigate = useNavigate();

  const listRouters = React.useMemo(() => {
    return getRoutesList(routes);
  }, [routes]);

  const listMenus = React.useMemo(() => {
    return listRouters
      .filter((item) => {
        return (
          item &&
          'name' in item &&
          !item.hideInMenu &&
          !item.hiddenMainMenu &&
          !item.index &&
          !item.redirect &&
          item.path !== '*'
        );
      })
      .map((item) => {
        let pyInitials = pinyin(item.name || '', {
          style: pinyin.STYLE_FIRST_LETTER,
        });

        let py = pinyin(item.name || '', {
          style: pinyin.STYLE_NORMAL,
        });

        let pyInitialsValue = '';
        let pyValue = '';

        if (Array.isArray(py)) {
          pyValue = py.join('');
        }

        if (Array.isArray(pyInitials)) {
          pyInitialsValue = pyInitials.join('');
        }
        return {
          label: item.name,
          value: item.path,
          py: pyValue,
          pyInitials: pyInitialsValue,
        } as SearchSelectOptionData;
      });
  }, [listRouters]);

  const [list, setList] = React.useState<SearchSelectOptionData[]>(listMenus);

  const onChange = (
    event: SearchSelectOptionData[] | ValueType | ValueType[],
  ) => {
    if (Array.isArray(event)) {
      const [obj] = event;
      if (obj && typeof obj === 'object' && obj.value) {
        const current: any = listRouters.find(
          (item) => item.path === obj.value,
        );
        const result = onNavigate(current, navigate, { location });
        if (!result) {
          return;
        }
        navigate(current.path, { replace: true });
      }
    }
  };

  const handleSearch = (value: string) => {
    if (value) {
      const li = listMenus.filter((item) => {
        const Reg = new RegExp(`${value}`);
        if (
          Reg.test(item.label) ||
          Reg.test(item.py) ||
          Reg.test(item.pyInitials)
        ) {
          return true;
        }
        return false;
      });
      setList(li);
    } else {
      setList(listMenus);
    }
  };

  return (
    <div style={{ marginBottom: 10, padding: '0px 10px' }}>
      <SearchSelect
        placeholder="请输入"
        mode="single"
        labelInValue
        showSearch={true}
        option={list}
        onSearch={handleSearch}
        onChange={onChange}
        className="uiw-admin-search"
      />
    </div>
  );
};

export default SearchMenus;
