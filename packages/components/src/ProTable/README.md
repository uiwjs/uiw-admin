## ProTable

集成搜索表单的Table组件，用于一般页面的查询搜索。解决业务中**查询条件+Table**的样板代码问题。 **依赖于uiw v4.10.7以上版本**

## 何时使用

当你的表格需要与服务端进行交互，又或者表格有查询条件时使用

### 基础用例

```jsx mdx:preview
import React from 'react';
import { ProTable, useTable } from '@uiw-admin/components';
import { Icon } from 'uiw';

function Demo1() {
  const table = useTable('https://randomuser.me/api', {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data) => {
      return {
        total: 100,
        data: data.results,
      };
    },
    // 格式化查询参数 会接收到pageIndex 当前页  searchValues 表单数据
    query: (pageIndex, pageSize, searchValues) => {
      return {
        page: pageIndex,
        results: pageSize,
        ...searchValues,
      }
    },
    requestOptions: {method: 'GET'}
  });

  return (
    <ProTable
      // 搜索栏按钮
      bordered
      searchBtns={[
        {
          label: '搜索',
          type: 'primary',
          onClick: () => {
            table.onSearch()
          },
        },
        {
          label: '重置',
          onClick: () => {
            table.onReset()
          },
        },
      ]}
      paginationProps={{
        pageSizeOptions: [10,20,30],
        pageSize: 10,
      }}
      table={table}
      columns={[
        {
          title: '名字',
          key: 'name',
          props: {
            widget: 'input',
            initialValue: '',
            widgetProps: {
              placeholder: '输入用户名',
            },
          },
          render: (text) => {
            return <div>{text.title}.{text.first}{text.last}</div>
          }
        },
        {
          title: '年龄',
          key: 'registered',
          props: {
            widget: 'select',
            key: 'age',
            option: [
              { label: '20', value: 20 },
              { label: '10', value: 10 },
            ],
          },
          render: (text) => {
            return <div>{text.age}</div>
          }
        },
        {
          title: '手机号',
          key: 'phone',
        },
        {
          title: '性别',
          key: 'gender',
          props: {
            widget: 'select',
            option: [
              { label: 'female', value: 'female' },
              { label: 'male', value: 'male' },
            ],
          },
        },
      ]}
    />
  );
}

export default Demo1

```

### 显示操作栏

> 操作栏区域默认是`Button`按钮，可通过`render`自定义

<!--rehype:bgwhite=true&codesandbox=true&codepen=true-->
```jsx mdx:preview
import React from 'react';
import { ProTable, useTable } from '@uiw-admin/components';
import { Dropdown, Menu, ButtonGroup, Button, Divider, Icon } from 'uiw';

const menu = (
  <div>
    <Menu bordered style={{ minWidth: 120 }}>
      <Menu.Item icon="reload" text="重新加载" />
      <Menu.Item icon="heart-on" text="另存为" active />
      <Menu.Item icon="appstore" text="应用商城" />
      <Menu.Item icon="bar-chart" text="月统计报表" />
      <Menu.Item icon="setting" text="偏好设置" />
    </Menu>
  </div>
);

function Demo2() {
const table = useTable('https://randomuser.me/api', {
    formatData: (data) => {
      return {
        total: 100,
        data: data.results,
      };
    },
    query: (pageIndex, pageSize, searchValues) => {
      return {
        page: pageIndex,
        results: pageSize,
        pageSize: 10,
        ...searchValues,
      }
    },
    requestOptions: {method: 'GET'}
  });

  return (
    <ProTable
      // 操作栏按钮
      operateButtons={[
        { label: '自定义查询', type: 'primary',  style: {marginRight: 10} },
        {
          
          render: <Dropdown trigger="click" menu={menu} >
                    <a href='#' onClick={e => e.preventDefault()}>
                      点击我出现下拉菜单 <Icon type="down" />
                    </a>
                  </Dropdown>
        },
      ]} 
      table={table}
      columns={[
        {
          title: '名字',
          key: 'name',
          props: {
            widget: 'input',
            initialValue: '',
            widgetProps: {
              preIcon: 'tag',
              placeholder: '输入用户名',
            },
          },
          render: (text) => {
            return <div>{text.title}.{text.first}{text.last}</div>
          }
        },
        {
          title: '年龄',
          key: 'registered',
          props: {
            widget: 'select',
            key: 'age',
            option: [
              { label: '20', value: 20 },
              { label: '10', value: 10 },
            ],
          },
          render: (text) => {
            return <div>{text.age}</div>
          }
        },
        {
          title: '手机号',
          key: 'phone',
        },
        {
          title: '性别',
          key: 'gender',
          props: {
            widget: 'select',
            option: [
              { label: 'female', value: 'female' },
              { label: 'male', value: 'male' },
            ],
          },
        },
      ]}
    />
  );
}

export default Demo2
```

### table多选、单选行

<!--rehype:bgwhite=true&codesandbox=true&codepen=true-->
```jsx mdx:preview
import React, { useState } from 'react';
import { ProTable, useTable } from '@uiw-admin/components';

function Demo3() {

const [isSingle, SetInSingle] = useState(false)

const table = useTable('https://randomuser.me/api', {
    formatData: (data) => {
      return {
        total: 10,
        data: data.results,
      };
    },
    query: (pageIndex, pageSize, searchValues) => {
      return {
        page: pageIndex,
        results: pageSize,
        pageSize: 10,
        ...searchValues,
      }
    },
    requestOptions: {method: 'GET'}
  });

  return (
    <>
      <div style={{whiteSpace: 'break-spaces'}}>选中的值{JSON.stringify(table && table.selection.selected)}</div>
      <ProTable
        // 操作栏按钮
        operateButtons={[
          { label: '全选', type: 'primary', onClick: () => { table.selection.selectAll() }  },
          { label: '取消全选', type: 'primary', onClick: () => { table.selection.unSelectAll() }   },
          { label: '切换', type: 'primary', onClick: () => { table.selection.toggleAll() }   },
          { label: '单选多选切换', type: 'primary', onClick: () => {
            table.selection.unSelectAll()
            SetInSingle(!isSingle)
          }},
        ]}
        table={table}
        rowSelection={{
          // 多选 checkbox 单选radio
          type: isSingle ? 'radio' : 'checkbox',
          // 选中的键名 column里的key
          selectKey: 'name',
          // 默认值
          defaultSelected: [],
        }}
          // 取消全部选择
        onPageChange={() => {
          table.selection.unSelectAll()
        }}
        columns={[
          {
            title: '名字',
            key: 'name',
            props: {
              widget: 'input',
              initialValue: '',
              widgetProps: {
                preIcon: 'tag',
                placeholder: '输入用户名',
              },
            },
            render: (text) => {
              return <div>{text.title}.{text.first}{text.last}</div>
            }
          },
        ]}
      />
    </>
  );
}

export default Demo3
```

### table表单验证

<!--rehype:bgwhite=true&codesandbox=true&codepen=true-->
```jsx mdx:preview
import React from 'react';
import { ProTable, useTable } from '@uiw-admin/components';

function Demo4() {
  const table = useTable('https://randomuser.me/api', {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data) => {
      return {
        total: 100,
        data: data.results,
      };
    },
    // 格式化查询参数 会接收到pageIndex 当前页  searchValues 表单数据
    query: (pageIndex, pageSize, searchValues) => {
      return {
        page: pageIndex,
        results: pageSize,
        ...searchValues,
      }
    },
    requestOptions: {method: 'GET'}
  });

  return (
    <ProTable
       // 搜索栏按钮
      searchBtns={[
        {
          label: '搜索',
          type: 'primary',
          onClick: () => {
            table.onSearch()
          },
        },
        {
          label: '重置',
          onClick: () => {
            table.onReset()
          },
        },
      ]}
      onBeforeSearch={({ initial, current }) => {
        const errorObj = {};
        if (!current.name) errorObj.name = '名字不能为空！';
        if (!current.age) errorObj.age = '年龄不能为空！';
        if (!current.gender) errorObj.gender = '性别不能为空！';
        if (Object.keys(errorObj).length > 0) {
          const err = new Error();
          err.filed = errorObj;
          throw err;
        }
        return true;
      }}
      paginationProps={{
        pageSizeOptions: [10,20,30],
        pageSize: 10,
      }}
      table={table}
      columns={[
        {
          title: '名字',
          key: 'name',
          props: {
            widget: 'input',
            initialValue: '',
            widgetProps: {
              preIcon: 'tag',
              placeholder: '输入用户名',
            },
          },
          render: (text) => {
            return <div>{text.title}.{text.first}{text.last}</div>
          }
        },
        {
          title: '年龄',
          key: 'registered',
          props: {
            widget: 'select',
            key: 'age',
            option: [
              { label: '20', value: 20 },
              { label: '10', value: 10 },
            ],
          },
          render: (text) => {
            return <div>{text.age}</div>
          }
        },
        {
          title: '手机号',
          key: 'phone',
        },
        {
          title: '性别',
          key: 'gender',
          props: {
            widget: 'select',
            option: [
              { label: 'female', value: 'female' },
              { label: 'male', value: 'male' },
            ],
          },
        },
      ]}
    />
  );
}

export default Demo4
```

### 表头分组

与uiw table使用方法一致，可通过传props配置统一的表单

<!--rehype:bgwhite=true&codesandbox=true&codepen=true-->
```jsx mdx:preview
import React from 'react';
import { ProTable, useTable } from '@uiw-admin/components';

function Demo5() {
  const table = useTable('https://randomuser.me/api', {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data) => {
      data.results = data.results.map(res => ({
        ...res,
        city: res.location.city,
        country: res.location.country,
      }))
      return {
        total: 100,
        data: data.results,
      };
    },
    // 格式化查询参数 会接收到pageIndex 当前页  searchValues 表单数据
    query: (pageIndex, pageSize, searchValues) => {
      return {
        page: pageIndex,
        results: pageSize,
        ...searchValues,
      }
    },
    requestOptions: {method: 'GET'}
  });
  return (
    <ProTable
       // 搜索栏按钮
      searchBtns={[
        {
          label: '搜索',
          type: 'primary',
          onClick: () => {
            table.onSearch()
          },
        },
        {
          label: '重置',
          onClick: () => {
            table.onReset()
          },
        },
      ]}
     
      paginationProps={{
        pageSizeOptions: [10,20,30],
        pageSize: 10,
      }}
      table={table}
      columns={[
        {
          title: '名字',
          key: 'name',
          width: 100,
          props: {
            widget: 'input',
            initialValue: '',
            widgetProps: {
              preIcon: 'tag',
              placeholder: '输入用户名',
            },
          },
          render: (text) => {
            return <div>{text.title}.{text.first}{text.last}</div>
          }
        },
        {
          title: '年龄',
          key: 'registered',
          width: 100,
          props: {
            widget: 'select',
            key: 'age',
            option: [
              { label: '20', value: 20 },
              { label: '10', value: 10 },
            ],
          },
          render: (text) => {
            return <div>{text.age}</div>
          }
        },
        {
          title: '区域',
          key: 'location',
          children: [{
            title: '城市',
            key: 'city',
            props: {
            widget: 'input',
            initialValue: '',
            widgetProps: {
              placeholder: '输入国家',
            },
          },
            
          }, {
            title: '国家',
            key: 'country',
          }]
        }
      ]}
    />
  );
}

export default Demo5
```

### 自定义表单列

默认是一行五个，可自定义

<!--rehype:bgwhite=true&codesandbox=true&codepen=true-->
```jsx mdx:preview
import React from 'react';
import { ProTable, useTable } from '@uiw-admin/components';

function Demo6() {
  const table = useTable('https://randomuser.me/api', {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data) => {
      return {
        total: 100,
        data: data.results,
      };
    },
    // 格式化查询参数 会接收到pageIndex 当前页  searchValues 表单数据
    query: (pageIndex, pageSize, searchValues) => {
      return {
        page: pageIndex,
        results: pageSize,
        ...searchValues,
      }
    },
    requestOptions: {method: 'GET'}
  });

  return (
    <ProTable
      formCol={2}
       // 搜索栏按钮
      searchBtns={[
        {
          label: '搜索',
          type: 'primary',
          onClick: () => {
            table.onSearch()
          },
        },
        {
          label: '重置',
          onClick: () => {
            table.onReset()
          },
        },
      ]}
      paginationProps={{
        pageSizeOptions: [10,20,30],
        pageSize: 10,
      }}
      table={table}
      columns={[
        {
          title: '名字',
          key: 'name',
          props: {
            widget: 'input',
            initialValue: '',
            widgetProps: {
              preIcon: 'tag',
              placeholder: '输入用户名',
            },
          },
          render: (text) => {
            return <div>{text.title}.{text.first}{text.last}</div>
          }
        },
        {
          title: '年龄',
          key: 'registered',
          props: {
            widget: 'select',
            key: 'age',
            option: [
              { label: '20', value: 20 },
              { label: '10', value: 10 },
            ],
          },
          render: (text) => {
            return <div>{text.age}</div>
          }
        },
        {
          title: '手机号',
          key: 'phone',
        },
        {
          title: '性别',
          key: 'gender',
          props: {
            widget: 'select',
            option: [
              { label: 'female', value: 'female' },
              { label: 'male', value: 'male' },
            ],
          },
        },
      ]}
    />
  );
}
export default Demo6
```

## Props

| 参数           | 说明                                                   | 类型                                            | 默认值 |
| -------------- | ------------------------------------------------------ | ----------------------------------------------- | ------ |
| columns        | 与`uiw table` columns用法一致 必传, 如果需要表单，也在此增加`props`                     | FormCol[]                                       | []     |
| operateButtons | 操作栏按钮集合，属性与uiw button一致并支持自定义render | `Array<ButtonProps & { render?: JSX.Element }>` | []     |
| searchBtns     | 搜索栏按钮集合，属性与uiw button一致并支持自定义render | `Array<ButtonProps & { render?: JSX.Element }>` | []     |
| table          | useTable返回值                                    | Object 必传                                     |        |
| onPageChange   | 分页回调             |（page: number） => void                        | -      |
| onBeforeSearch | 查询table前表单回调，可用于表单验证，返回true 继续查询 | ({initial, current}) => Boolean                 |        |
| rowSelection   | 选择框配置                                        | RowSelection                                    | -      |
| scroll         | 设置横向滚动                                      | ScrollProps        | -      |
| paginationProps| 分页属性                                          | 继承自[uiw Pagination](https://uiwjs.github.io/#/components/pagination)        | -      |
| formCol        | 网格中表单一行列数                                 | number    | 5      |
| tableBackgroundColor        | 网格中表格的背景色                                 | React.CSSProperties['backgroundColor']    | -      |
| tableHeadHidden        | 网格中表头是否显示                               | boolean    | false      |
 
更多属性文档请参考 [uiw/Table](https://uiwjs.github.io/#/components/table)

### searchBtns

| 参数            | 说明                                     | 类型     | 默认值 |
| --------------- | ---------------------------------------- | -------- | ------ |
| label           | 按钮标题                               | string   | - |
| render          | 不使用button，自定义组件                               | React Component   | - |

更多属性文档请参考 [uiw button](https://uiwjs.github.io/#/components/button)

### operateButtons

与`searchBtns`参数一致

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

### columns  props

配置搜索表单

| 参数        | 说明                                  | 类型                                                            | 默认值 |
| ----------- | ------------------------------------- | --------------------------------------------------------------- | ------ |
| widget      | 表单组件                              | 支持例子中的组件, 组件名与uiw表单组件名字一致，只是首字母小写了 | -      |
| widgetProps | 组件属性                              | 与uiw对应的组件属性一致                                         | -      |
| label       | 表单标题，如果不填则继承columns title | String                                                          | -      |
| key         | 表单name，如果不填则继承columns key   | String       | -      |
| option      | 组件 是`checkbox`、`select`、`searchSelect`、`searchTree` 使用， 数据源统一叫option   | Array       | -      |

当前支持的widget组件有

```

input
radio,
checkbox,
switch,
select,
searchSelect,
textarea,
dateInput,
timePicker,
monthPicker
searchTree,
dateInputRange
```

 props可以是个对象属性值是以上参数，也可以是个数组方便处理筛选条件大于列表展示的情况

```js
<!-- 对象 -->
props: {
  widget: 'input',
  initialValue: 'zzz',
  widgetProps: {
    preIcon: 'tag',
    placeholder: '输入用户名',
  }
}

  <!-- 数组 -->
props: [
  {
    widget: 'input',
    initialValue: 'zzz',
    key: 'name'
  },
  {
    widget: 'input',
    initialValue: 'a',
  },
],

```

### paginationProps

| 参数    | 说明         | 类型   | 默认值 |
| ------- | ------------ | ------ | ------ |
| pageSizeOptions | 指定每页可以显示多少条      | Number[]  | {}     |
| pageSize | 每页条数       | Number | 10     |
| onShowSizeChange     | pageSize 变化的回调  | Function(current, pageSize)  | -      |

更多属性文档请参考 [uiw Pagination](https://uiwjs.github.io/#/components/pagination)

## useTable

### params

| 参数    | 说明         | 类型   | 默认值 |
| ------- | ------------ | ------ | ------ |
| api     | 接口请求地址 | string | -      |
| options | 配置集合     | object | {}     |

### options

| 参数             | 说明                                                              | 类型                                                                                     | 默认值                     |
| ---------------- | ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------- |
| formatData       | 格式化接口返回的数据，必须返回{total: 总数, data: 列表数据}的格式 | (data) => {total: 10, data: []}                                                          | -                          |
| query            | 格式化请求参数, 会接收到pageIndex 当前页  searchValues 表单数据   | (pageIndex: number, searchValues: any) => {page:  pageIndex, pageSize: 10, searchValues} | {}                         |
| SWRConfiguration | swr配置                                                           | SWRConfiguration                                                                         | {revalidateOnFocus: false} |
| requestOptions | request参数，继承自[axios config](https://axios-http.com/docs/req_config)     | object | {}     |

### response

| 参数         | 说明         | 类型          | 默认值 |
| ------------ | ------------ | ------------- | ------ |
| data         | 接口请求数据 | Array         | -      |
| total        | 数据总数     | Number        | -      |
| searchValues | 表单值       | Object        | -      |
| selection    | 选择框属性   | UseSelections | -      |
| pageIndex    | 当前分页     | Number        | 1      |
| onRefersh    | 刷新分页数据  | () => void        | -      |
| onReset      | 重置表单，查询数据  | () => void         | -      |
| onSearch     | 查询数据             | () => void         | -     |
| form     | 返回搜索表单form实例各种内部函数,可用于主动触发事件, 与[Uiw Form](https://uiwjs.github.io/#/components/form) ref 属性返回的一致              | Ref         | -     |

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
