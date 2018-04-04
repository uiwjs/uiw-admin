
const proxy = {
  'POST /api/login': (req, res) => {
    const { password, username } = req.body;
    if (password === 'wcj' && username === 'wcj') {
      return res.json({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.AePSY2E9j5oa_R2hpTohBBqJbLbJebtwUMD4cFRPPo4',
        username: 'wcj',
      });
    }
    return res.status(401).json({
      error: 'bad username/password, access denied',
    });
  },
};

module.exports = proxy;
