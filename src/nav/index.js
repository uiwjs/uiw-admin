import Bundle from "../utils/bundle";

export const getNavData = app => [
  {
    name: '首页',
    path: '/',
    layout: 'BasicLayout',
    component: Bundle([], () => import('../layouts/BasicLayout')),
    children: [
      {
        name: '仪表盘',
        icon: 'appstore-o',
        path: 'dashboard',
        children: [
          {
            name: '仪表盘',
            icon: 'pie-chart',
            path: 'dashboard',
            component: Bundle([], () => import('../routes/Dashboard/Dashboard')),
          }, {
            name: '数据分析',
            icon: 'coffee',
            path: 'analysis',
            component: Bundle([], () => import('../routes/Dashboard/Analysis')),
          }, {
            name: '工作台',
            icon: 'coffee',
            path: 'workplace',
            component: Bundle([], () => import('../routes/Dashboard/Workplace')),
          }
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
                component: Bundle([], () => import('../routes/Component/FormPage/StepForm')),
              }, {
                name: '高级表单',
                path: 'advanced-form',
                component: Bundle([], () => import('../routes/Component/FormPage/AdvancedForm')),
              }
            ]
          }, {
            name: '表单',
            icon: 'pie-chart',
            path: 'form',
            children: [
              {
                name: '表单元素',
                path: 'form',
                component: Bundle([], () => import('../routes/Component/Form/FormElements')),
              }
            ]
          }, {
            name: '头像列表',
            icon: 'smile',
            path: 'avatarlist',
            component: Bundle([], () => import('../routes/Component/AvatarList')),
          }, {
            name: '倒计时',
            icon: 'time',
            path: 'countdown',
            component: Bundle([], () => import('../routes/Component/CountDown')),
          }, {
            name: '文本省略',
            icon: 'pie-chart',
            path: 'ellipsis',
            component: Bundle([], () => import('../routes/Component/Ellipsis')),
          }, {
            name: '描述列表',
            icon: 'dot-chart',
            path: 'description-list',
            component: Bundle([], () => import('../routes/Component/DescriptionList')),
          }, {
            name: '处理结果',
            icon: 'circle-check',
            path: 'result',
            component: Bundle([], () => import('../routes/Component/Result')),
          }, {
            name: '底部工具栏',
            icon: 'cut',
            path: 'footer-toolbar',
            component: Bundle([], () => import('../routes/Component/FooterToolbar')),
          }, {
            name: '全局页脚',
            icon: 'copyright',
            path: 'global-footer',
            component: Bundle([], () => import('../routes/Component/GlobalFooter')),
          },
          {
            name: '图表',
            icon: 'area-chart',
            path: 'charts',
            children: [
              {
                name: '柱状图',
                path: 'bar-chart',
                component: Bundle([], () => import('../routes/Component/Charts/Bar')),
              }
            ]
          }
        ]
      }, {
        name: '异常',
        icon: 'warning-o',
        path: 'exception',
        children: [
          {
            name: '403',
            path: '403',
            component: Bundle([], () => import('../routes/Exception/403')),
          }, {
            name: '404',
            path: '404',
            component: Bundle([], () => import('../routes/Exception/404')),
          }, {
            name: '500',
            path: '500',
            component: Bundle([], () => import('../routes/Exception/500')),
          }
        ]
      }
    ]
  }, {
    layout: 'BlankLayout',
    component: Bundle([], () => import('../layouts/BlankLayout')),
    children: {
      name: '组件库UIW使用文档',
      path: 'https://uiw-react.github.io/',
      target: '_blank',
      icon: 'document',
    },
  }
];