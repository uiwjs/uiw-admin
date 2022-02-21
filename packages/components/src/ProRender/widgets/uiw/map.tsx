import React, { useState, useEffect } from 'react';
import { MapProps } from './types';
// import { Collapse } from 'uiw';
// const { Panel } = Collapse;

const Map: React.FC<MapProps> = ({ children, title, ...rest }) => {
  const { theme, displayType, allCollapsed = false } = { ...rest }; // TODO!
  const [collapsed, setCollapsed] = useState(false);

  console.log('collapsed', collapsed);

  useEffect(() => {
    setCollapsed(allCollapsed);
  }, [allCollapsed]);
  if (!title) {
    return <div className="w-100">{children}</div>;
  }
  if (theme === '1') {
    return (
      <div className="w-100">
        <div
          style={{
            fontSize: 17,
            fontWeight: 500,
            paddingBottom: 4,
            borderBottom: '1px solid rgba( 0, 0, 0, .2 )',
            marginBottom: 16,
          }}
        >
          {title}
        </div>
        <div style={{ marginLeft: displayType === 'row' ? 0 : 12 }}>
          {children}
        </div>
      </div>
    );
  }

  // 新增卡片视图
  if (theme === '2') {
    const { id } = rest.schema;
    return (
      <div className="fr-theme-card-wrap">
        <div>
          {/* title 容器的 id，用来加锚点用 */}
          <div id={id || title} className="fr-theme-card-title">
            {title}
          </div>
          <div style={{ marginLeft: displayType === 'row' ? 0 : 12 }}>
            {children}
          </div>
        </div>
      </div>
    );
  }

  // const toggle = (keyList: any[]) => {
  //   if (keyList.length > 0) {
  //     setCollapsed(false);
  //   } else {
  //     setCollapsed(true);
  //   }
  // };
  return (
    <div className="w-100">
      {children}
      {/*<Collapse activeKey={collapsed ? [] : ['1']} onChange={toggle}>*/}
      {/*  <Panel*/}
      {/*    header={<span style={{ fontSize: 16, fontWeight: 500 }}>{title}</span>}*/}
      {/*    key="1"*/}
      {/*    className="fr-collapse-object"*/}
      {/*  >*/}
      {/*    */}
      {/*  </Panel>*/}
      {/*</Collapse>*/}
    </div>
  );
};

export default Map;

// export default function map({ children, title }) {
//   return <div className="w-100">{children}</div>;
// }
