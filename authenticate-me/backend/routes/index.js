const express = require('express');
const router = express.Router();
const apiRouter = require('./api')
// const csrf = require('csurf');
// const csrfProtection = csrf({ cookie: true });

router.use('/api', apiRouter);

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

module.exports = router;
