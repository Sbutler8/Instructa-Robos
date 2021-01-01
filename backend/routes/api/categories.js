const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Category, CategoriesandProject, Project } = require('../../db/models');

router.get('/', asyncHandler(async function(_req, res) {
    const categories = await Category.findAll();
    res.json({ categories });
  }));

router.get('/:categoryName', asyncHandler(async function(req, res) {
  console.log('PARAMS---------------->',req.params.categoryName)
  const selectedProjects = await Project.findAll({
    include: {
    model: Category,
    where: { name: req.params.categoryName }
    },
    }
  )
  selectedProjects.map(project => {
    console.log(project.name)
  })

  res.json({ selectedProjects });
}));

module.exports = router;
