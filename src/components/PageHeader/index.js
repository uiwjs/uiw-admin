import React, { PureComponent } from 'react';
import { Tabs } from 'uiw';
import styles from './index.module.less';

export default class PageHeader extends PureComponent {
  render() {
    const { logo, title, content, extraContent, action, tabList } = this.props;
    const tabDefaultValue = tabList && (tabList.filter(item => item.default)[0] || tabList[0]);
    return (
      <div className={styles.pageHeader}>
        <div className={styles.detail}>
          {logo && <div className={styles.logo}>{logo}</div>}
          <div className={styles.main}>
            <div className={styles.row}>
              {title && <h1 className={styles.title}>{title}</h1>}
              {action && <div className={styles.action}>{action}</div>}
            </div>
            <div className={styles.row}>
              {content && <div className={styles.content}>{content}</div>}
              {extraContent && <div className={styles.extraContent}>{extraContent}</div>}
            </div>
          </div>
        </div>
        {
          tabList &&
          tabList.length &&
          <Tabs
            className={styles.tabs}
            activeKey={(tabDefaultValue && tabDefaultValue.key)}
            onChange={this.onChange}
          >
            {
              tabList.map(item => <Tabs.Pane label={item.tab} key={item.key} />)
            }
          </Tabs>
        }
      </div>
    );
  }
}
