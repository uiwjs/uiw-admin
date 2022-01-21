module.exports.selectPage = function (req, res) {
  const { pageSize, page } = req.body;
  const list = [];
  for (let i = 0; i < 50; i++) {
    list[i] = {
      id: i + 1,
      name: '邓紫棋',
      age: '16',
      info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手',
      edit: '',
    };
  }

  var newDataList = list.slice((page - 1) * pageSize, page * pageSize);

  setTimeout(() => {
    return res.status(200).json({
      code: 200,
      message: '获取数据成功',
      data: {
        rows: newDataList,
        total: 50,
      },
    });
  }, 2000);
};

module.exports.insert = function (req, res) {
  return res.status(200).json({
    code: 200,
    message: '新增成功',
    data: {},
  });
};

module.exports.update = function (req, res) {
  return res.status(200).json({
    code: 200,
    message: '编辑成功',
    data: {},
  });
};

module.exports.selectById = function (req, res) {
  return res.status(200).json({
    code: 200,
    message: '获取详情成功',
    data: {
      input: '周政',
      textarea: '蟠龙路',
      select: 4,
      switch: true,
      radio: 'man',
      checkbox: ['sichuan', 'hubei'],
      dateInputsecond: '2021-1-21 23:59:59',
      dateInput: '2021-1-21',
      monthPicker: '2021-1-21',
      timePicker: '2021-1-21 23:59:59',
      slider: 90,
    },
  });
};
