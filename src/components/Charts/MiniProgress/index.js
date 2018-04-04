import React from 'react';
import { Tooltip } from 'uiw';

import styles from './index.less';

const MiniProgress = ({ target, color = 'rgb(19, 194, 194)', strokeWidth, percent }) => (
  <div className={styles.miniProgress} >
    <Tooltip content={`目标值:${target}%`} className={styles.tooltip} >
      <div
        className={styles.target}
        style={{ left: (target ? `${target}%` : null) }}
      >
        <span style={{ backgroundColor: (color || null) }} />
        <span style={{ backgroundColor: (color || null) }} />
      </div>
    </Tooltip>

    <div className={styles.progressWrap}>
      <div
        className={styles.progress}
        style={{
          backgroundColor: (color || null),
          width: (percent ? `${percent}%` : null),
          height: (strokeWidth || null),
        }}
      />
    </div>
  </div >
);

export default MiniProgress;
