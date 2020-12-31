import { fetch } from './csrf';

const LOAD = 'project/load';

const load = projects => ({
    type: LOAD,
    projects,
  });

export const getFeatures = (id) => async dispatch => {
  const res = await fetch(`/api/projects/${id}`);
  dispatch(load(res.data.addedFunctions));
};

const initialState = {};

const functionalityReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:{
        const allProjects = {};
        action.projects.forEach(project => {
            allProjects[project.id] = project;
        });
        return allProjects;
        }
    default:
      return state;
  }
};

export default functionalityReducer;
