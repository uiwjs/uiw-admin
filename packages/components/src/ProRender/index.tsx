import React from 'react';
// import { ConfigProvider } from 'uiw';
// import zhCN from 'uiw/lib/locale/zh_CN'; locale={zhCN}
import FRCore from './form-render-core/src';
import { FRProps } from './form-render-core/src/interface';
import { widgets as defaultWidgets } from './widgets/uiw';

export { defaultWidgets as widgets };
export {
  useForm,
  connectForm,
  createWidget,
  mapping,
} from './form-render-core/src';

const FR: React.FC<FRProps> = (props) => {
  const { widgets, configProvider, ...rest } = props;
  return <FRCore widgets={{ ...defaultWidgets, ...widgets }} {...rest} />;
};

export default FR;

// <ConfigProvider {...configProvider}>
// </ConfigProvider>
