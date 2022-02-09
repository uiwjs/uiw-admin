"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[124],{88124:function(n,e,t){t.r(e),e.default="# \u4e1a\u52a1Drawer\u5f39\u6846\n\n\x3c!--ProDrawer--\x3e\n\n## \u57fa\u672c\u4f7f\u7528\n\x3c!--rehype:bgWhite=true&codeSandbox=true&codePen=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState } from 'react';\nimport { ProDrawer } from '@uiw-admin/components'\nimport { Button } from 'uiw'\nconst Demo = () => {\n  const [ drawerVisible,setDrawerVisible ] = useState( false )\n  const [ isView ] = useState( false )\n    return (\n     <div>\n       <ProDrawer\n        title=\"\u6807\u9898\"\n        visible={drawerVisible}\n        onClose={()=>setDrawerVisible(false)}\n        width={800}\n        buttons={[\n          { label: '\u53d6\u6d88', type:\"primary\" , onClick: ()=>setDrawerVisible(false) },\n          {\n            label: '\u4fdd\u5b58',\n            type:\"primary\",\n            onClick: ()=>{},\n            show: !isView\n          },\n        ]}\n      >\n        <div>demo</div>\n      </ProDrawer>\n      <Button type=\"primary\" onClick={()=>setDrawerVisible(true)}>\u6253\u5f00\u5f39\u6846</Button>\n     </div>\n  );\n}\nReactDOM.render(<Demo />, _mount_);\n```\n\n## \u53c2\u6570\n\n#### \u57fa\u7840\u53c2\u6570\n[\u7ee7\u627f\u4e8euiw,\u8bf7\u53c2\u8003Drawer\u5176\u4f59\u53c2\u6570](https://uiwjs.github.io/#/components/drawer)\n\n| \u53c2\u6570       | \u8bf4\u660e                                                 | \u7c7b\u578b          | \u9ed8\u8ba4\u503c |\n| :--------- | :--------------------------------------------------- | :------------ | :----- |\n| visible | \u663e\u793a\u9690\u85cf                                              | boolean     |   -   |\n| title    | \u6807\u9898                            | string      |  ''    |\n| onClose     | \u5173\u95ed\u4e8b\u4ef6                                  | ()=>void       | null  |\n| width    | Drawer\u5bbd                                       | number       | 1000   |\n| buttons   | \u6309\u94ae\u96c6\u5408                                       | buttonsColumns       | []   |\n\n\n#### buttonsColumns\u53c2\u6570\n[\u7ee7\u627f\u4e8euiw,\u8bf7\u53c2\u8003Button\u5176\u4f59\u53c2\u6570](https://uiwjs.github.io/#/components/button)\n\n| \u53c2\u6570       | \u8bf4\u660e                                                   | \u7c7b\u578b                     | \u9ed8\u8ba4\u503c |\n| :--------- | :--------------------------------------------------- | :------------------------| :----- |\n| label      | \u6309\u94ae\u6587\u672c   | string                   |   -   |\n| show      | \t\u662f\u5426\u5c55\u793a\u6309\u94ae       | boolean\t |  true\n| path      | \t\u6743\u9650       | string\t |  - |\n| disabled      | \t\u662f\u5426\u7981\u7528       | boolean\t |  false |\n\n\n"}}]);
//# sourceMappingURL=124.0a5a1912.chunk.js.map