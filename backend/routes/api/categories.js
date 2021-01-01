const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Category, CategoriesandProject, Project } = require('../../db/models');

router.get('/', asyncHandler(async function(_req, res) {
    const categories = await Category.findAll();
    res.json({ categories });
  }));

router.get('/:categoryName', asyncHandler(async function(req, res) {
  const selectedProjects = await Project.findAll({
    include: {
    model: Category,
    where: { name: req.params.categoryName }
    },
    }
  )
  res.json({ selectedProjects });
}));

module.exports = router;
