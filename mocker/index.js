
const { login, verify } = require('./login');

const proxy = {
  'GET /api/user': { id: 1, username: 'kenny', sex: 6 },
  'POST /api/login': login,
  'GET /api/user/verify': verify,
};

module.exports = proxy;
