import { useState } from 'react'
import { ProTable, useTable } from '@uiw-admin/components'
import { useCity } from '@/servers'

export default function Demo() {
  const table = useTable('/api/getData', {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data) => {
      return {
        total: data.total,
        data: data.data,
      }
    },
    // 格式化查询参数 会接收到pageIndex 当前页  searchValues 表单数据
    query: (pageIndex, pageSize, searchValues) => {
      return {
        page: pageIndex,
        pageSize,
        data: searchValues,
      }
    },
  })

  const [val, setVal] = useState('')

  const { city = [], isLoading } = useCity(val)

  const handleSearch = (val: string) => {
    setVal(val)
  }
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
      table={table}
      onBeforeSearch={({ current }) => {
        const errorObj: any = {}
        if (!current.name) errorObj.name = '名字不能为空！'
        if (Object.keys(errorObj).length > 0) {
          const err: any = new Error()
          err.filed = errorObj
          throw err
        }
        return true
      }}
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
      paginationProps={{
        pageSizeOptions: [10, 20, 30],
        pageSize: 10,
        onShowSizeChange: (current, pageSize) => {
          console.log(current, pageSize)
        },
      }}
      columns={[
        {
          title: '名字',
          key: 'name',
          props: {
            widget: 'input',
            initialValue: 'zzz',
            key: 'name',
            // 组件属性
            widgetProps: {
              placeholder: '输入用户名',
            },
          },
        },
        {
          title: '年龄',
          key: 'age',
          width: 50,
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
            label: '详细地址',
            key: 'detailAddress',
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
          title: 'timePicker',
          key: 'timePicker1',
          props: {
            widget: 'timePicker',
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
          title: '家乡',
          key: 'city',
          width: 50,
          props: {
            widget: 'searchSelect',
            widgetProps: {
              allowClear: true,
              placeholder: '请输入选择',
              showSearch: true,
              loading: isLoading,
              option: city,
              onSearch: handleSearch,
            },
          },
        },
      ]}
    />
  )
}
