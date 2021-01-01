const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Project, AddedFunctionality, Category, CategoriesandProject } = require('../../db/models');
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');

router.get('/', asyncHandler(async function(_req, res) {
    const projects = await Project.findAll();
    res.json({ projects });
  }));


  router.get('/:id', asyncHandler(async function(req, res) {
    const project = await Project.findByPk(Number(req.params.id));
    const category = await Category.findOne({
      through: {
        model: CategoriesandProject,
        where: { projectId: req.params.id }
      },
    });
    // console.log('CATEGORY------------->', category)
    const addedFunctions = await AddedFunctionality.findAll({
      where: {
        projectId: req.params.id,
      }
    })
    res.json({ project, addedFunctions, category });
}));

router.post('/', singleMulterUpload("image"), asyncHandler(async function (req, res) {
  console.log('REQ.FILE--------------->', req.file);
  const addedFeatureImageUrl = await singlePublicFileUpload(req.file);
  console.log('ADDED FUNCTION BODY------>',req.body)
  const addedFeature = await AddedFunctionality.create( {name: req.body.name, code: req.body.code, vidPic: addedFeatureImageUrl, projectId: req.body.projectId } );
  res.json({ addedFeature });
  })
);

// router.post(
//   "/",
//   singleMulterUpload("image"),
//   asyncHandler(async (req, res) => {
//     const { email, password, username } = req.body;
//     const profileImageUrl = await singlePublicFileUpload(req.file);
//     const user = await User.signup({
//       username,
//       email,
//       password,
//       profileImageUrl,
//     });

//     setTokenCookie(res, user);

//     return res.json({
//       user,
//     });
//   })
// );

module.exports = router;
