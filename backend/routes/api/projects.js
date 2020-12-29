const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Project, Category } = require('../../db/models');

router.get('/', asyncHandler(async function(_req, res) {
    const projects = await Project.findAll();
    res.json({ projects });
  }));

module.exports = router;
