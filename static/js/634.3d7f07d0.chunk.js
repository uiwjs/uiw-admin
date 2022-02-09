"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[634],{48634:function(n,i,e){e.r(i),i.default='config\n===\n\n> \u7b80\u5316 .kktrc \u4e2d\u914d\u7f6e\n\n## \u8bf4\u660e\n\n`@` \u6307\u5411 src \u76ee\u5f55\n\n`@@` \u6307\u5411 src/.uiw \u76ee\u5f55 \n\n\u9ed8\u8ba4\u5f15\u7528\u5305 `@uiw-admin/plugins`\u3001`@kkt/less-modules`\u3001`@kkt/raw-modules`\u3001`@kkt/scope-plugin-options`\n\n## Installation\n\n```bash\nnpm i @uiw-admin/config -D\n```\n\n## define\u9ed8\u8ba4\u503c\n\n```ts\n/** \u5168\u5c40\u9ed8\u8ba4\u516c\u5171\u53c2\u6570  */\nexport const defaultDefine = {\n  /** \u6743\u9650\u6821\u9a8c  \u9ed8\u8ba4 true */\n  AUTH: JSON.stringify(true),\n  /** \u8def\u7531 \u8df3\u8f6c\u524d\u7f00 \u9ed8\u8ba4 "/" */\n  BASE_NAME: JSON.stringify("/"),\n  /** \u672c\u5730\u5b58\u50a8\u4f7f\u7528 localStorage \u8fd8\u662f  sessionStorage  \u53ef\u9009\u503c local | session */\n  STORAGE: JSON.stringify("session")\n  /** \u7248\u672c  */\n  VERSION: JSON.stringify(\n    require(path.resolve(process.cwd(), \'./package.json\')).version || \'0\',\n  ),\n}\n```\n\n## \u53c2\u6570\n\n```ts\nexport type ConfFun = (conf: Configuration, evn: string, options?: LoaderConfOptions | undefined) => Configuration\nexport interface ConfigProps extends Omit<Configuration, \'plugins\'> {\n  /**\n   * \u522b\u540d\n   * \u9ed8\u8ba4\u7cfb\u7edf\u5185\u7f6e\u4e24\u4e2a\u522b\u540d\n   * 1. `@` \u6307\u5411 src \u76ee\u5f55\n   * 2. `@@` \u6307\u5411 src/.uiw \u76ee\u5f55\n   */\n  alias?: Record<string, string | false | string[]>;\n  /** \u63d2\u4ef6 */\n  plugins?:\n    | Configuration[\'plugins\']\n    | ([string, Record<string, any>] | string)[];\n  /** \u9ed8\u8ba4\u5168\u5c40\u53d8\u91cf define \uff0c \u6ce8\u610f\uff1a\u5bf9\u8c61\u7684\u5c5e\u6027\u503c\u4f1a\u7ecf\u8fc7\u4e00\u6b21 JSON.stringify \u8f6c\u6362   */\n  define?: Record<string, any> & Partial<typeof defaultDefine>;\n  /** \u5176\u4ed6 \u5de5\u5177 */\n  loader?: (\n    | ConfFun\n    | {\n        loader?: ConfFun;\n        options?: LoaderConfOptions | undefined | Record<string, any>;\n      }\n    | string\n    | [string, Record<string, any>]\n  )[];\n  /** \u9879\u76ee\u524d\u7f00 */\n  publicPath?: string;\n  /** \u66f4\u591a\u7684 \u81ea\u5b9a\u4e49  \u914d\u7f6e */\n  moreConfig?: ConfFun;\n  /** \u8f93\u51fa */\n  output?: Omit<Configuration[\'output\'], \'publicPath\'>;\n}\n```\n\n## plugins \u53c2\u6570\u8bf4\u660e\n\n1. \u4f7f\u7528\u7684\u5148\u884c\u6761\u4ef6--\u63d2\u4ef6\u9700\u8981\u9ed8\u8ba4\u5bfc\u51fa\u662f\u4e00\u4e2aclass\u7c7b,\u7b26\u5408`webpack` \u7684 `plugins`\u89c4\u8303,\n2. \u4e00\u7ef4\u6570\u7ec4\u65f6,\u76f4\u63a5\u628a\u5b57\u7b26\u4e32\u5f53\u6210\u5305\u540d\u8fdb\u884c\u52a0\u8f7d\uff0c\u4f7f\u7528`require`\u8fdb\u884c\u5f15\u5165\u540e\u76f4\u63a5`new`\n3. \u4e8c\u7ef4\u6570\u7ec4\u65f6\uff0c\u76f4\u63a5\u628a\u6570\u7ec4\u7b2c\u4e00\u9879\u5f53\u6210\u5305\u8fdb\u884c\u52a0\u8f7d\uff0c\u4f7f\u7528`require`\u8fdb\u884c\u5f15\u5165\u540e`new`\u7684\u65f6\u5019\u628a \u7b2c\u4e8c\u9879\u5f53\u6210\u53c2\u6570\u8fdb\u884c\u4f20\u9012\u5230\u5305\u5185\u90e8 \n4. `webpack` \u539f\u59cb\u7684 [`plugins`](https://webpack.docschina.org/concepts/plugins/#usage) \u7c7b\u578b\n\n## loader \u53c2\u6570\u8bf4\u660e\n\n1. \u4f7f\u7528\u7684\u5148\u884c\u6761\u4ef6--\u9700\u8981\u9ed8\u8ba4\u5bfc\u51fa\u662f\u4e00\u4e2a\u51fd\u6570\u65b9\u6cd5,\u8fd4\u56de\u7c7b\u578b\u4e3a`webpack.Configuration `\u7684\u51fd\u6570\n2. \u4e00\u7ef4\u6570\u7ec4\u65f6,\u76f4\u63a5\u628a\u5b57\u7b26\u4e32\u5f53\u6210\u5305\u540d\u8fdb\u884c\u52a0\u8f7d\uff0c\u4f7f\u7528`require`\u8fdb\u884c\u5f15\u5165\u540e\u76f4\u63a5\u65b9\u6cd5\u8c03\u7528\n3. \u4e8c\u7ef4\u6570\u7ec4\u65f6\uff0c\u76f4\u63a5\u628a\u6570\u7ec4\u7b2c\u4e00\u9879\u5f53\u6210\u5305\u8fdb\u884c\u52a0\u8f7d\uff0c\u4f7f\u7528`require`\u8fdb\u884c\u5f15\u5165\u540e\u8c03\u7528\u7684\u65f6\u5019\u628a \u7b2c\u4e8c\u9879\u5f53\u6210\u53c2\u6570\u8fdb\u884c\u4f20\u9012\u5230\u5305\u5185\u90e8 \n\n## \uff01\uff01\uff01\u6ce8\u610f\n\n\u4f7f\u7528`plugins`\u548c`loader`\u65f6,\u8bf7\u9009\u5b89\u88c5\u5bf9\u5e94\u5305\n\n## \u539f\u59cb\u6848\u4f8b\n\n```ts\nimport defaultConfig from "@uiw-admin/config"\nimport { RematchWebpackPlugin, RoutesWebpackPlugin } from \'@uiw-admin/plugins\'\nimport lessModules from \'@kkt/less-modules\'\nimport rawModules from \'@kkt/raw-modules\'\nimport scopePluginOptions from \'@kkt/scope-plugin-options\'\nexport default defaultConfig({\n  define: {\n    VERSION: JSON.stringify(pkg.version),\n    // BASE_NAME: "/uiw"\n  },\n  plugins: [new RematchWebpackPlugin(), new RoutesWebpackPlugin()],\n  // publicPath: process.env.NODE_ENV === "development" ? "/" : "/uiw/",\n  loader: [\n    rawModules,\n    { loader: scopePluginOptions, options: { allowedFiles: [path.resolve(process.cwd(), \'README.md\')] } },\n    lessModules\n  ],\n})\n```\n\n## \u65b0\u6848\u4f8b\n\n```ts\nimport defaultConfig from "@uiw-admin/config"\nexport default defaultConfig({\n   define: {\n    STORAGE: \'local\',\n  },\n  plugins: ["@uiw-admin/plugins-rematch", "@uiw-admin/plugins-routes"],\n  loader: [\n    "@kkt/raw-modules",\n    ["@kkt/scope-plugin-options", { "allowedFiles": "./README.md" }],\n    "@kkt/less-modules",\n  ],\n})\n```'}}]);
//# sourceMappingURL=634.3d7f07d0.chunk.js.map