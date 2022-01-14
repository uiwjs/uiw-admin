import React from 'react';
import { Table, Button, Checkbox, Pagination, Loader } from 'uiw';

export default function ProTabel() {
  const datas = [
    {
      name: '邓紫棋',
      age: '12',
      info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。',
    },
    {
      name: '李易峰',
      age: '32',
      info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人',
    },
    {
      name: '范冰冰',
      age: '23',
      info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手',
    },
    {
      name: '杨幂',
      age: '34',
      info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',
    },
    {
      name: 'Angelababy',
      age: '54',
      info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。',
    },
    {
      name: '唐嫣',
      age: '12',
      info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班',
    },
    {
      name: '吴亦凡',
      age: '4',
      info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。',
    },
  ];
  const columns = [
    {
      title: '名字',
      key: 'name',
    },
    {
      title: '年龄',
      key: 'age',
    },
    {
      title: '地址',
      key: 'info',
    },
  ];
  return (
    <div>
      <Loader loading={false} style={{ display: 'block' }}>
        <Table
          columns={columns}
          data={datas}
          footer={<Pagination current={2} pageSize={10} total={30} divider />}
        />
      </Loader>
    </div>
  );
}
