module.exports.getData = function (req, res) {
  const { page, pageSize } = req.body
  setTimeout(() => {
    return res.status(200).json({
      code: 1,
      total: 30,
      page: page,
      pageSize: pageSize,
      data: [
        {
          name: '邓紫棋',
          age: page,
          info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手。',
        },
        {
          name: '李易峰',
          age: page,
          info: '1987年5月4日出生于四川成都，中国内地男演员、流行乐歌手、影视制片人',
        },
        {
          name: '范冰冰',
          age: page,
          info: '1981年9月16日出生于山东青岛，中国影视女演员、制片人、流行乐女歌手',
        },
        {
          name: '杨幂',
          age: page,
          info: '1986年9月12日出生于北京市，中国内地影视女演员、流行乐歌手、影视制片人。',
        },
        {
          name: 'Angelababy',
          age: page,
          info: '1989年2月28日出生于上海市，华语影视女演员、时尚模特。',
        },
        {
          name: '唐嫣',
          age: page,
          info: '1983年12月6日出生于上海市，毕业于中央戏剧学院表演系本科班',
        },
        {
          name: '吴亦凡',
          age: page,
          info: '1990年11月06日出生于广东省广州市，华语影视男演员、流行乐歌手。',
        },
      ],
    })
  }, 1000)
}

module.exports.getCity = function (req, res) {
  const search = req.query.val
    ? [{ label: req.query.val, val: req.query.val }]
    : []
  setTimeout(() => {
    return res.status(200).json({
      code: 1,
      data: [
        {
          label: '南通',
          value: '南通',
        },
        {
          label: '通州',
          value: '通州',
        },
      ].concat(search),
    })
  }, 1000)
}
