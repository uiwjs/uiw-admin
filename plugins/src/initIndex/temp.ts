export interface ConfigInitIndexProps {
  swr?: boolean;
  globalCss?: boolean;
  SWRConfig?: any;
  routeType?: 'history' | 'hash' | 'browser';
}

export const getInitIndexTemp = (config: ConfigInitIndexProps) => {
  return `
// @ts-ignore
import React from 'react'
import ReactDOM from 'react-dom'
import Control from '@uiw-admin/router-control'
import '@uiw/reset.css'
import './index.css'
${(config.swr && "import { request } from '@uiw-admin/utils'") || ''}
${(config.swr && "import { SWRConfig } from 'swr'") || ''}
${(config.globalCss && "import '@/global.css'") || ''}
ReactDOM.render(
  ${
    config.swr
      ? `<SWRConfig
    value={{
      ${(config.SWRConfig && `...${JSON.stringify(config.SWRConfig)},`) || ''}
      fetcher: (resource, init) => {
      return request(resource, init)
    },
    provider: () => new Map()
  }}
  >
  <Control
      routeType="hash"
  />
  </SWRConfig>`
      : `<Control
routeType = "hash"
  /> `
  },
  document.getElementById('root')
)
`;
};

export const getInitCssTemp = () => {
  return `
#root, body, html {
  height: 100%;
} 
  
`;
};
