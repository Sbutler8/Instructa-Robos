const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Project } = require('../../db/models');

router.get('/', asyncHandler(async function(_req, res) {
    const projects = await Project.findAll();
    // console.log('PROJECTS:',projects)
    res.json({ projects });
  }));

router.get('/:id', asyncHandler(async function(req, res) {
const pokemon = await PokemonRepository.one(req.params.id);
return res.json(pokemon);
}));

module.exports = router;
