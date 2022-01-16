const { login, verify, logout } = require('./login');
const { getData } = require('./selectPage');

const proxy = {
  'GET /api/user': { id: 1, username: 'kenny', sex: 6 },
  'POST /api/user': { id: 1, username: 'kenny', sex: 6 },
  'POST /api/login': login,
  'POST /api/logout': logout,
  'GET /api/user/verify': verify,
  'POST /api/getData': getData,
};

module.exports = proxy;
