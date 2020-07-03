/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare module 'react-dynamic-loadable' {
  interface Options {
    models: () => Promise<any>[];
    component: () => Promise<any>;
    LoadingComponent: () => JSX.Element;
  }
  function _default(options: Options): void;
  export default _default;
}
