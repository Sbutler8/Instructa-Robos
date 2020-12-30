const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Project } = require('../../db/models');

router.get('/', asyncHandler(async function(_req, res) {
    const projects = await Project.findAll();
    res.json({ projects });
  }));


router.get('/:id', asyncHandler(async function(req, res) {
  console.log('PARAMS:', req.params)
  // const project = await Project.findByPk(Number(req.params.id));
  // console.log('ID:----------------------->',project)
  res.json({ project });
}));

module.exports = router;
