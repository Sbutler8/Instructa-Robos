const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Project, AddedFunctionality } = require('../../db/models');

router.get('/', asyncHandler(async function(_req, res) {
    const projects = await Project.findAll();
    res.json({ projects });
  }));


  router.get('/:id', asyncHandler(async function(req, res) {
    const project = await Project.findByPk(Number(req.params.id));
    const addedFunctions = await AddedFunctionality.findAll({
      where: {
        projectId: req.params.id,
      }
    })
    res.json({ project, addedFunctions });
}));

router.post('/', asyncHandler(async function (req, res) {
    const addedFeature = await AddedFunctionality.create(req.body);
    res.json({ addedFeature });
  })
);

module.exports = router;
