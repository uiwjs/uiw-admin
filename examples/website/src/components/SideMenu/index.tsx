import { NavLink } from 'react-router-dom';
import DomainVerify from '@uiw/react-domain-verify';
import menus from '../../menus.json';
import styles from './index.module.less';
import React from 'react';

export default function SideMenu(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={styles.side} {...props}>
      <div className={styles.menus}>
        {menus.map(({ label, path, divider, ...otherItem }, idx) => {
          if (divider) {
            return (
              <div key={idx} className={styles.divider}>
                {label}
              </div>
            );
          }
          if (path && /^https?:\/\//.test(path)) {
            // 只有在 github web 的时候显示
            if (/^https?:\/\/uiw.gitee.io/.test(path)) {
              return (
                <DomainVerify key={idx} href="uiwjs.github.io">
                  <a href={path} target="__blank" {...otherItem}>
                    {label}
                    <svg viewBox="0 0 1024 1024" width={14}>
                      <path d="M821.1456 276.8384c-235.9296 25.1392-449.1776 226.7136-490.5472 452.352a38.4 38.4 0 1 1-75.5712-13.824c45.568-248.576 269.312-468.48 526.6944-510.6688l-117.8112-69.1712a38.4 38.4 0 0 1 38.912-66.2528l223.3344 131.1744a38.4 38.4 0 0 1 10.1376 57.6l-170.752 206.6432a38.4 38.4 0 1 1-59.1872-48.9472l114.7904-138.9056z" />
                      <path d="M832 620.0832a38.4 38.4 0 0 1 76.8 0v158.208c0 85.9648-61.5936 157.8496-140.8 157.8496H204.8c-79.2064 0-140.8-71.8848-140.8-157.9008V300.3904c0-86.016 61.5936-157.8496 140.8-157.8496h220.2112a38.4 38.4 0 1 1 0 76.8H204.8c-33.8944 0-64 35.072-64 81.0496V778.24c0 45.9776 30.1056 81.1008 64 81.1008h563.2c33.8944 0 64-35.1232 64-81.1008v-158.1568z" />
                    </svg>
                  </a>
                </DomainVerify>
              );
            }
            return (
              <a key={idx} href={path} target="__blank" {...otherItem}>
                {label}
                <svg viewBox="0 0 1024 1024" width={14}>
                  <path d="M821.1456 276.8384c-235.9296 25.1392-449.1776 226.7136-490.5472 452.352a38.4 38.4 0 1 1-75.5712-13.824c45.568-248.576 269.312-468.48 526.6944-510.6688l-117.8112-69.1712a38.4 38.4 0 0 1 38.912-66.2528l223.3344 131.1744a38.4 38.4 0 0 1 10.1376 57.6l-170.752 206.6432a38.4 38.4 0 1 1-59.1872-48.9472l114.7904-138.9056z" />
                  <path d="M832 620.0832a38.4 38.4 0 0 1 76.8 0v158.208c0 85.9648-61.5936 157.8496-140.8 157.8496H204.8c-79.2064 0-140.8-71.8848-140.8-157.9008V300.3904c0-86.016 61.5936-157.8496 140.8-157.8496h220.2112a38.4 38.4 0 1 1 0 76.8H204.8c-33.8944 0-64 35.072-64 81.0496V778.24c0 45.9776 30.1056 81.1008 64 81.1008h563.2c33.8944 0 64-35.1232 64-81.1008v-158.1568z" />
                </svg>
              </a>
            );
          }
          return (
            <NavLink key={idx} to={path || ''}>
              {label}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}
