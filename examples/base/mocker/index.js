const { getData } = require('./selectPage');
const { login, verify, logout, reloadAuth } = require('./login');
const { selectPage, insert, update, selectById } = require('./demo')


const proxy = {
  'GET /api/user': { id: 1, username: 'kenny', sex: 6 },
  'POST /api/user': { id: 1, username: 'kenny', sex: 6 },
  'POST /api/login': login,
  'POST /api/logout': logout,
  'GET /api/user/verify': verify,
  'POST /api/getData': getData,
  "POST /api/reloadAuth": reloadAuth,
  'POST /api/demo/selectPage': selectPage,
  'POST /api/demo/selectById': selectById,
  'POST /api/demo/insert': insert,
  'POST /api/demo/update': update,
};

module.exports = proxy;
