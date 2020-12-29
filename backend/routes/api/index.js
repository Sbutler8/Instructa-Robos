const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const projectsRouter = require('./projects.js');
const categoriesRouter = require('./categories.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/projects', projectsRouter);

router.use('/categories', categoriesRouter);

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

module.exports = router;
