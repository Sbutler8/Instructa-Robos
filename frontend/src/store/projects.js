import { fetch } from './csrf';

const LOAD = 'project/load';

const load = projects => ({
    type: LOAD,
    projects,
  });

export const getProjects = () => async dispatch => {
    const res = await fetch(`/api/projects`);
    dispatch(load(res.data.projects));
  };

export const getProjectDetails = (id) => async (dispatch) => {
  const response = await fetch(`/api/projects/${id}`);

  if (response.ok) {
    const projectObj = await response.json();
    dispatch(load(projectObj));
  }
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
    default:
      return state;
  }
};

export default projectReducer;
