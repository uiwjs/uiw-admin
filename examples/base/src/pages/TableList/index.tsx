import React, { useState } from 'react'
import { ProTable, useTable } from '@uiw-admin/components'
import { useCity } from '../../queries'

export default function Demo () {
  const table = useTable('/api/getData', {
    // 格式化接口返回的数据，必须返回{total 总数, data: 列表数据}的格式
    formatData: (data) => {
      return {
        total: data.total,
        data: data.data
      }
    },
    // 格式化查询参数 会接收到pageIndex 当前页  searchValues 表单数据
    query: (pageIndex, searchValues) => {
      return {
        page: pageIndex,
        pageSize: 10,
        data: searchValues
      }
    }
    // swr options
    // SWRConfiguration: {
    //   revalidateOnFocus: false
    // }
  })

  const [val, setVal] = useState('')

  const { city = [], isLoading } = useCity(val)

  const handleSearch = (val: string) => {
    setVal(val)
  }

  return (
    <ProTable
      // 操作栏按钮
      operateButtons={[{ label: '新增', type: 'primary' }]}
      // 自定义搜索栏按钮, 覆盖原本的search按钮 如要执行查询操作 需要按钮 htmlType: 'submit'
      // searchButtons={[
      //   { label: '搜索', type: 'primary',  htmlType: 'submit',  onClick: () => {
      //     table.onSearch()
      //   }},
      //   { label: '点我', onClick: () => null},
      // ]}
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
              placeholder: '输入用户名'
            }
          }
        },
        {
          title: '年龄',
          key: 'age',
          width: 50,
          props: {
            widget: 'select',
            option: [
              { label: '20', value: 20 },
              { label: '10', value: 10 }
            ]
          }
        },
        {
          title: '地址',
          key: 'info',
          props: {
            label: '详细地址',
            key: 'detailAddress',
            widget: 'textarea'
          }
        },
        {
          title: 'Switch',
          key: 'Switch',
          props: {
            widget: 'switch'
          }
        },
        {
          title: 'timePicker',
          key: 'timePicker',
          props: {
            widget: 'timePicker'
          }
        },
        {
          title: 'timePicker',
          key: 'timePicker1',
          props: {
            widget: 'timePicker'
          }
        },
        {
          title: 'MonthPicker',
          key: 'MonthPicker',
          props: {
            widget: 'monthPicker'
          }
        },
        {
          title: 'DateInput',
          key: 'DateInput',
          props: {
            widget: 'dateInput'
          }
        },
        {
          title: 'Radio',
          key: 'Radio',
          props: {
            widget: 'radio',
            option: [
              { label: '男', value: 'man' },
              { label: '女', value: 'girl' }
            ]
          }
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
              onSearch: handleSearch
            }
          }
        }
      ]}
    />
  )
}
