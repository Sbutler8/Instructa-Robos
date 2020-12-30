const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Category, CategoriesandProject } = require('../../db/models');

router.get('/', asyncHandler(async function(_req, res) {
    const categories = await Category.findAll();
    res.json({ categories });
  }));

router.get('/:id', asyncHandler(async function(req, res) {
  console.log('PARAMS---------------->',req.params.id)
  const projects = await CategoriesandProject.findByPk(1,{
    // include: [{
    //   model: [Category],
    //   where: {name: req.params.id}
    // }]
  });
  console.log(res.json({ projects }));
  res.json({ projects });
}));

module.exports = router;
