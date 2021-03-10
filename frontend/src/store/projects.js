import { fetch } from './csrf';

const LOAD = 'project/load';
const LOAD_ONE = 'project/loadOne';
const LOAD_SELECTED = 'project/loadSelected';
const ADD_FEATURE = 'project/addFeature';
// const LOAD_ALL = 'project/loadAll';

const load = projects => ({
    type: LOAD,
    projects,
  });

// const loadAll = (categoryId,CategoriesAndProjects) => ({
//   type: LOAD_ALL,
//   categoryId, CategoriesAndProjects,
// });

const loadOne = project => ({
  type: LOAD_ONE,
  project,
});

const loadSelected = item => ({
  type: LOAD_SELECTED,
  item,
});

const addFeature = feature => ({
  type: ADD_FEATURE,
  feature,
});

export const getCategory = (id) => async (dispatch) => {
  const res = await fetch(`/api/projects/${id}`);
  dispatch(loadSelected(res.data.category.name));
};

export const getProjects = () => async dispatch => {
    const res = await fetch(`/api/projects`);
    dispatch(load(res.data.projects));
};

export const getProjectDetails = (id) => async (dispatch) => {
  const res = await fetch(`/api/projects/${id}`);
  dispatch(loadOne(res.data.project));
};

export const getProjectsByCategory = (categoryName) => async (dispatch) => {
  const res = await fetch(`/api/categories/${categoryName}`);
  dispatch(load(res.data.selectedProjects));
};

// export const getAllCategoriesAndProjects = (categoryId) => async (dispatch) => {
//   console.log('STORE',categoryId)
//   const res = await fetch(`/api/projects/all/${categoryId}`);
//   console.log('FE RES', res.data)
//   dispatch(loadAll(categoryId,res.data.categoriesAndProjects));
// };

export const addFunctionality = (formObj) => async (dispatch) => {
  const { name,code,vidPic, projectId} = formObj;
  const formData = new FormData();
  if (vidPic) formData.append("image", vidPic);
  formData.append("name", name);
  formData.append("code", code);
  formData.append("projectId", projectId);

  const res = await fetch(`/api/projects`, {
    method: "POST",
    body: formData,
  });

  dispatch(addFeature(res.data));
  return res
};

const initialState = {};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:{
        const allProjects = {};
        action.projects.forEach(project => {
            allProjects[project.id] = project;
        });
        return allProjects;
        }
    case LOAD_ONE:{
      return action.project;
      }
    // case LOAD_ALL:{
    //   // action.CategoriesAndProjects.forEach(project => {
    //   //   state[prject.categoryId]=[...project]
    //   // })
    //   console.log('Storeeee-->', action.CategoriesAndProjects)
    //   // state.categoriesAndProjects = action.CategoriesAndProjects
    //   return {...state, ['categoriesAndProjects']:{[action.categoryId]:action.CategoriesAndProjects}}
    //   }
    default:
      return state;
  }
};

export const currentCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SELECTED:{
      return action.item;
      }
    default:
      return state;
  }
};
export default projectReducer;
