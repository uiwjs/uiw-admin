const { login, verify, logout, selectDemoPage, reloadAuth } = require('./login');


const proxy = {
  'GET /api/user': { id: 1, username: 'kenny', sex: 6 },
  'POST /api/user': { id: 1, username: 'kenny', sex: 6 },
  'POST /api/login': login,
  'POST /api/logout': logout,
  'GET /api/user/verify': verify,
  'POST /api/selectDemoPage': selectDemoPage,
  "POST /api/reloadAuth": reloadAuth,
};

module.exports = proxy;
