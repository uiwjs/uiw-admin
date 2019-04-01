uiw-admin
---

确保 node 版本是 6.5 +

## 目录结构

```bash
├── README.md               # 说明文档
├── mock                    # 本地模拟数据
│   ├── access.js
│   ├── ...
│   └── utils.js
├── package.json
├── public
│   ├── iconfont              # 字体文件
│   │   ├── iconfont.css
│   │   ├── ....
│   │   └── iconfont.woff
│   └── index.html            # HTML 入口模板
└── src
    ├── assets                # 本地静态资源目录
    │   ├── ...
    │   └── logo.svg
    ├── common               # 通用布局
    │   ├── menu.js
    │   ├── menu.json
    │   ├── router.js
    ├── components            # 业务通用组件
    │   ├── ActiveChart
    │   ├── ...
    │   └── Trend
    ├── g2.js                 # 可视化图形配置
    ├── index.js              # 应用入口
    ├── index.less            # 全局样式
    ├── layouts               # 通用布局
    │   ├── BasicLayout.js
    │   ├── BasicLayout.less
    │   ├── PageHead.js
    │   ├── PageHeaderLayout.js
    ├── models               # dva model 目录
    ├── nav                  # 应用公用配置目录，如导航信息
    ├── router.js            # 路由入口
    ├── routes               # 业务页面入口和常用模板
    │   ├── ...
    │   └── User
    ├── services             # 后台接口服务
    │   ├── api.js           # 接口调用方法
    │   ├── ...
    │   └── step.js
    └── utils                # 工具库，如接口调用封装
```

## 本地开发&使用

