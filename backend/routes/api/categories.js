const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Category } = require('../../db/models');

router.get('/', asyncHandler(async function(_req, res) {
    const categories = await Category.findAll();
    res.json({ categories });
  }));

module.exports = router;
