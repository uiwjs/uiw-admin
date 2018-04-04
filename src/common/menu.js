
const menuData = [
  {
    name: '仪表盘',
    icon: 'appstore-o',
    path: 'dashboard',
    children: [
      {
        name: '仪表盘',
        icon: 'pie-chart',
        path: 'dashboard',
      }, {
        name: '数据分析',
        icon: 'coffee',
        path: 'analysis',
      }, {
        name: '工作台',
        icon: 'coffee',
        path: 'workplace',
      },
    ],
  }, {
    name: '组件',
    icon: 'inbox',
    path: 'component',
    children: [
      {
        name: '表单页面',
        icon: 'pie-chart',
        path: 'form-page',
        children: [
          {
            name: '分步表单',
            path: 'step-form',
          }, {
            name: '高级表单',
            path: 'advanced-form',
          },
        ],
      }, {
        name: '表单',
        icon: 'pie-chart',
        path: 'form',
        children: [
          {
            name: '表单元素',
            path: 'form',
          },
        ],
      }, {
        name: '头像列表',
        icon: 'smile',
        path: 'avatarlist',
      }, {
        name: '倒计时',
        icon: 'time',
        path: 'countdown',
      }, {
        name: '文本省略',
        icon: 'pie-chart',
        path: 'ellipsis',
      }, {
        name: '描述列表',
        icon: 'dot-chart',
        path: 'description-list',
      }, {
        name: '处理结果',
        icon: 'circle-check',
        path: 'result',
      }, {
        name: '底部工具栏',
        icon: 'cut',
        path: 'footer-toolbar',
      }, {
        name: '全局页脚',
        icon: 'copyright',
        path: 'global-footer',
      },
      {
        name: '图表',
        icon: 'area-chart',
        path: 'charts',
        children: [
          {
            name: '柱状图',
            path: 'bar-chart',
          },
        ],
      },
    ],
  }, {
    name: '异常',
    icon: 'warning-o',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403',
      }, {
        name: '404',
        path: '404',
      }, {
        name: '500',
        path: '500',
      },
    ],
  },
];


/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;
function isUrl(path) {
  return reg.test(path);
}
function formatter(data, parentPath = '/', parentAuthority) {
  return data.map((item) => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
