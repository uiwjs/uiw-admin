/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { getValueByPath } from './utils';
import { WatchProperties } from '../src/interface';

interface WatcherProps {
  watchKey: string;
  watch: WatchProperties;
  formData: object;
  firstMount: boolean;
}

const Watcher = ({ watchKey, watch, formData, firstMount }: WatcherProps) => {
  const value = getValueByPath(formData, watchKey);
  const watchObj: any = watch[watchKey];

  useEffect(() => {
    const runWatcher = () => {
      if (typeof watchObj === 'function') {
        try {
          watchObj(value);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(`${watchKey}对应的watch函数执行报错：`, error);
        }
      } else if (watchObj && typeof watchObj.handler === 'function') {
        try {
          watchObj.handler(value);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log(`${watchKey}对应的watch函数执行报错：`, error);
        }
      }
    };

    if (firstMount) {
      const immediate = watchObj && watchObj.immediate;
      if (immediate) {
        runWatcher();
      }
    } else {
      runWatcher();
    }
  }, [JSON.stringify(value), firstMount]);
  return null;
};

export default Watcher;
