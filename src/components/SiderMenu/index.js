import React, { Component } from 'react';
import { Menu } from 'uiw';
import { NavLink } from 'react-router-dom';
import styles from './index.module.less';
// import nav from '../icons/nav';

export default class SiderMenu extends Component {
  renderMenu(menus, k) {
    const items = [];
    menus.forEach((item, key) => {
      if (item.children) {
        items.push(
          <Menu.SubMenu key={key} icon={item.icon} text={item.name} collapse>
            {this.renderMenu(item.children, `${k}${key}`)}
          </Menu.SubMenu>
        );
      } else if (item.divider) {
        items.push(<Menu.Divider key={`${k}${key}`} title={item.name} />);
      } else {
        items.push(
          <Menu.Item
            tagName={NavLink}
            to={item.path}
            key={`${k}${key}`}
            icon={item.icon}
            text={item.name}
          />
        );
      }
    });
    return items;
  }
  render() {
    const { menuData } = this.props;
    return (
      <Menu theme="dark" className={styles.menu}>
        {this.renderMenu(menuData, 'k')}
      </Menu>
    );
  }
}
