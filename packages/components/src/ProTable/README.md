## ProTable

集成搜索表单的Table组件，用于一般页面的查询搜索。


### demo

<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import React from 'react';
import { ProTable, useTable } from '@uiw-admin/components';

function Demo() {
  const table = useTable('/api/getData', {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data) => {
      return {
        total: data.total,
        data: data.data,
      };
    },
    // 格式化查询参数 会接收到pageIndex 当前页  searchValues 表单数据
    query: (pageIndex, searchValues) => {
      return {
        page: pageIndex,
        pageSize: 10,
        data: searchValues,
      };
    },
     // swr options
    SWRConfiguration: {
      revalidateOnFocus: false
    }
  });

  return (
    <ProTable
         // 操作栏按钮
      operateButtons={[
        { label: '自定义查询', type: 'primary' },
        {
          label: '全部取消',
          onClick: () => {
            table.selection.unSelectAll()
          },
        },
      ]}
      // 自定义搜索栏按钮, 覆盖原本的search按钮 如要执行查询操作 需要按钮 htmlType: 'submit'
      // searchBtns={[
      //   { label: '搜索', type: 'primary',  htmlType: 'submit',  onClick: () => {
      //     table.onSearch()
      //   }},
      //   { label: '点我', onClick: () => null},
      // ]}
      rowSelection={{
        // 多选 checkbox 单选radio
        type: 'checkbox',
        // 选中的键名 column里的key
        selectKey: 'name',
        // 默认值
        defaultSelected: ['邓紫棋'],
      }}
        // 取消全部选择
      onPageChange={() => {
        table.selection.unSelectAll()
      }}
      onBeforeSearch={({ initial, current }) => {
        const errorObj = {};
        if (!current.name) errorObj.name = '名字不能为空！';
        if (Object.keys(errorObj).length > 0) {
          const err = new Error();
          err.filed = errorObj;
          throw err;
        }
        return true;
      }}
      table={table}
      columns={[
        {
          title: '名字',
          key: 'name',
          props: {
            widget: 'input',
            initialValue: 'zzz',
            // 组件属性
            widgetProps: {
              preIcon: 'user',
              placeholder: '输入用户名',
            },
          },
        },
        {
          title: '年龄',
          key: 'age',
          props: {
            widget: 'select',
            option: [
              { label: '20', value: 20 },
              { label: '10', value: 10 },
            ],
          },
        },
        {
          title: '地址',
          key: 'info',
          props: {
            widget: 'textarea',
          },
        },
        {
          title: 'Switch',
          key: 'Switch',
          props: {
            widget: 'switch',
          },
        },
        {
          title: 'timePicker',
          key: 'timePicker',
          props: {
            widget: 'timePicker',
          },
        },
        {
          title: 'MonthPicker',
          key: 'MonthPicker',
          props: {
            widget: 'monthPicker',
          },
        },
        {
          title: 'DateInput',
          key: 'DateInput',
          props: {
            widget: 'dateInput',
          },
        },
        {
          title: 'Radio',
          key: 'Radio',
          props: {
            widget: 'radio',
            option: [
              { label: '男', value: 'man' },
              { label: '女', value: 'girl' },
            ],
          },
        },
        {
          title: 'SearchSelect',
          key: 'SearchSelect',
          props: {
            widget: 'searchSelect',
            widgetProps: {
              option: [
                { label: 'a', value: 2 },
                { label: 'aa', value: 3 },
                { label: 'aaa', value: 4 },
              ],
            },
          },
        },
      ]}
    />
  );
}

ReactDOM.render(<Demo />, _mount_);

```

## Porps

| 参数           | 说明                                                   | 类型                                            | 默认值 |
| -------------- | ------------------------------------------------------ | ----------------------------------------------- | ------ |
| columns        | 与uiw table colunms用法一致 必传                       | FormCol[]                                       | []     |
| operateButtons | 操作栏按钮集合，属性与uiw button一致并支持自定义render | `Array<ButtonProps & { render?: JSX.Element }>` | []     |
| searchBtns     | 搜索栏按钮集合，属性与uiw button一致并支持自定义render | `Array<ButtonProps & { render?: JSX.Element }>` | []     |
| table          | useTable返回值                                         | Object 必传                                     |        |
| onPageChange   | 分页回调                                               | （page: number） => void                        | -      |
| onBeforeSearch | 查询table前表单回调，可用于表单验证，返回true 继续查询 | ({initial, current}) => Boolean                 |        |
| rowSelection   | 选择框配置                                             | RowSelection                                    | -      |
| scroll         | 滚动                                                   | ScrollProps                                     | -      |

### rowSelection


| 参数            | 说明                                     | 类型     | 默认值 |
| --------------- | ---------------------------------------- | -------- | ------ |
| checkbox        | 选择框类型                               | checkbox | radio  | checkbox |
| selectKey       | 选择框的键名，必填,对应的column里的key。 | String   | -      |
| defaultSelected | 选中默认值                               | []       | -      |


### ScrollProps


| 参数 | 说明    | 类型             | 默认值 |
| ---- | ------- | ---------------- | ------ |
| x    | x轴宽度 | string 或 number | -      |


其余属性与uiw Table一致

### columns props

配置搜索表单


| 参数        | 说明                                  | 类型                                                            | 默认值 |
| ----------- | ------------------------------------- | --------------------------------------------------------------- | ------ |
| widget      | 表单组件                              | 支持例子中的组件, 组件名与uiw表单组件名字一致，只是首字母小写了 | -      |
| widgetProps | 组件属性                              | 与uiw对应的组件属性一致                                         | -      |
| label       | 表单标题，如果不填则集成columns title | String                                                          | -      |
| key         | 表单name，如果不填则集成columns key   | String                                                          | -      |

## useTable

### params


| 参数    | 说明         | 类型   | 默认值 |
| ------- | ------------ | ------ | ------ |
| key     | 接口请求地址 | string | -      |
| options | 配置集合     | object | {}     |

### options

| 参数             | 说明                                                              | 类型                                                                                     | 默认值                     |
| ---------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------- |
| formatData       | 格式化接口返回的数据，必须返回{total: 总数, data: 列表数据}的格式 | (data) => {total: 10, data: []}                                                          | -                          |
| query            | 格式化请求参数, 会接收到pageIndex 当前页  searchValues 表单数据   | (pageIndex: number, searchValues: any)	=> {page:  pageIndex, pageSize: 10, searchValues} | {}                         |
| SWRConfiguration | swr配置                                                           | SWRConfiguration                                                                         | {revalidateOnFocus: false} |


### response

| 参数         | 说明         | 类型          | 默认值 |
| ------------ | ------------ | ------------- | ------ |
| data         | 接口请求数据 | Array         | -      |
| total        | 数据总数     | Number        | -      |
| searchValues | 表单值       | Object        | -      |
| selection    | 选择框属性   | UseSelections | -      |
| pageIndex    | 当前分页     | Number        | 1      |

### selection

| 参数              | 说明               | 类型                  | 默认值 |
| ----------------- | ------------------ | --------------------- | ------ |
| selected          | 已经选择的元素     | array                 | -      |
| allSelected       | 是否全选           | boolean               | -      |
| noneSelected      | 是否一个都没有选择 | boolean               | -      |
| partiallySelected | 是否半选           | boolean               | -      |
| isSelected        | 是否被选择         | (value: T) => boolean | -      |
| setSelected       | 设置选择的元素     | (value: T[]) => void  | -      |
| select            | 选择元素           | (value: T) => void    | -      |
| unSelect          | 取消选择元素       | (value: T) => void    | -      |
| toggle            | 反选元素           | (value: T) => void    | -      |
| selectAll         | 选择全部元素       | () => void            | -      |
| unSelectAll       | 取消选择全部元素   | () => void            | -      |
| toggleAll         | 反选全部元素       | () => void            | -      |


## 贡献者

感谢所有的贡献者，欢迎开发者为开源项目贡献力量。

<a href="https://github.com/uiwjs/uiw-admin/graphs/contributors">
  <img src="https://uiwjs.github.io/uiw-admin/CONTRIBUTORS.svg" />
</a>

## License

Licensed under the MIT License.