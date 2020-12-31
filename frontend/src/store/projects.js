import { fetch } from './csrf';

const LOAD = 'project/load';
const LOAD_ONE = 'project/loadOne';
const ADD_FEATURE = 'project/addFeature';

const load = projects => ({
    type: LOAD,
    projects,
  });

const loadOne = project => ({
  type: LOAD_ONE,
  project,
});

const addFeature = feature => ({
  type: ADD_FEATURE,
  feature,
});

export const getProjects = () => async dispatch => {
    const res = await fetch(`/api/projects`);
    dispatch(load(res.data.projects));
};

export const getProjectDetails = (id) => async (dispatch) => {
  const res = await fetch(`/api/projects/${id}`);
  dispatch(loadOne(res.data.project));
};

export const addFunctionality = (formObj) => async (dispatch) => {
  const res = await fetch(`/api/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObj),
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

export default projectReducer;
