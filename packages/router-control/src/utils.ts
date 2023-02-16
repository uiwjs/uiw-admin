// @ts-nocheck
import React from 'react';
import { store } from '@uiw-admin/models';
import { ControllerProps } from './interface';

// @ts-ignore
// import routeModels from '@@/routeMapModels.json';
const routeModels = {};
/**  加载 model  */
export const useLoadModels = (props: {
  path?: string;
  addModels?: ControllerProps['addModels'];
}) => {
  const { addModels, path } = props;
  const [load, setLoad] = React.useState(true);
  const addModel = async (path: string) => {
    // @ts-ignore
    if (BINDPAGR) {
      try {
        // @ts-ignore
        const modelArr = routeModels[path] || [];
        if (addModels) {
          modelArr.forEach(async (item: { path: string; name: string }) => {
            const model = (await addModels(item.path)).default;
            store.addModel({ name: item.name, ...model });
          });
        }
      } catch (err) {
        setLoad(false);
      }
    }
    setLoad(false);
  };

  React.useMemo(() => {
    if (addModels && path) {
      addModel(path);
    } else {
      setLoad(false);
    }
  }, []);
  return load;
};
