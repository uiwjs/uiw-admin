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
│   ├── favicon.ico          
│   └── index.html            # HTML 入口模板
└── src
    ├── assets                # 本地静态资源目录
    │   ├── ...
    │   └── logo.svg
    ├── components            # 业务通用组件
    │   ├── ActiveChart
    │   ├── ...
    │   └── Trend
    ├── index.js              # 应用入口
    ├── global.less           # 全局样式
    ├── layouts               # 通用布局
    │   ├── BasicLayout.js
    │   ├── BasicLayout.less
    │   ├── PageHead.js
    │   ├── PageHeaderLayout.js
    ├── models               # @rematch/core model 目录
    ├── pages                # 页面对应的文件
    ├── routes               # 路由相关配置
    ├── services             # 后台接口服务
    │   ├── api.js           # 接口调用方法
    │   ├── ...
    │   └── step.js
    └── utils                # 工具库，如接口调用封装
```

## 开发运行

```bash
npm install          # 下载依赖包
npm run start        # 开发模式运行
npm run build        # 编译工程
```

