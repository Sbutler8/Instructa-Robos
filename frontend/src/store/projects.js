import { fetch } from './csrf';

const LOAD = 'project/load';
const LOAD_ONE = 'project/loadOne';
const LOAD_SELECTED = 'project/loadSelected';
const ADD_FEATURE = 'project/addFeature';

const load = projects => ({
    type: LOAD,
    projects,
  });

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

export const getAllCategoriesAndProjects = () => async (dispatch) => {
  const res = await fetch(`/api/projects/all`);
  // dispatch(load(res.data.categoriesAndProjects));
};

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
