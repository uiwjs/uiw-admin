const { authList } = require('./auth');

let token = '';

module.exports.login = function (req, res) {
  const { password, username } = req.body;
  if (password === 'admin' && username === 'admin') {
    token = '5c2d6d45-ec94-319c-a9c8-cae43e192b65';
    return res.json({
      updated_at: '2018/09/23 15:59:52',
      created_at: '2018/09/23 15:59:52',
      id: 1,
      username: 'admin',
      name: 'admin',
      admin: true,
      bio: '',
      location: '',
      organization: '',
      preferred_language: '',
      email: 'admin@admin.com',
      public_email: null,
      avatar: '',
      linkedin: '',
      web_url: null,
      skype: '',
      state: 'active',
      token: '5c2d6d45-ec94-319c-a9c8-cae43e192b65',
      authList: authList || [],
    });
  }
  return res.status(401).json({
    code: 401,
    error: '用户名或密码错误！',
  });
};

module.exports.reloadAuth = function (req, res) {
  return res.json({
    code: 200,
    token: '5c2d6d45-ec94-319c-a9c8-cae43e192b65',
    authList: authList || [],
  });
};

module.exports.verify = function (req, res) {
  if (!token) {
    return res.status(401).json({
      code: 401,
      error: '用户未登录！',
    });
  }
  return res.json({
    updated_at: '2018/09/23 15:59:52',
    created_at: '2018/09/23 15:59:52',
    id: 1,
    username: 'admin',
    name: 'admin',
    admin: true,
    bio: '',
    location: '',
    organization: '',
    preferred_language: '',
    email: 'admin@admin.com',
    public_email: null,
    avatar: '',
    linkedin: '',
    web_url: null,
    skype: '',
    state: 'active',
    token: token,
    authList: authList || [],
  });
};

module.exports.logout = function (req, res) {
  token = '';
  return res.status(200).json({
    message: '退出登录！',
  });
};

module.exports.selectDemoPage = function (req, res) {
  const { pageSize, page } = req.body;
  const list = [];
  for (let i = 0; i < 50; i++) {
    list[i] = {
      id: i,
      name: '邓紫棋',
      age: '16',
      info: '又名G.E.M.，原名邓诗颖，1991年8月16日生于中国上海，中国香港创作型女歌手',
      edit: ''
    };
  }

  var newDataList = list.slice((page - 1) * pageSize, page * pageSize)

  setTimeout(() => {
    return res.status(200).json({
      code: 200,
      message: '退出登录！',
      data: {
        rows: newDataList,
        total: 50
      }
    });
  }, 2000)
};
