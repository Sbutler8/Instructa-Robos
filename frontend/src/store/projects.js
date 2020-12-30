import { fetch } from './csrf';

const LOAD = 'project/load';
const LOAD_ONE = 'project/loadOne';

const load = projects => ({
    type: LOAD,
    projects,
  });

const loadOne = project => ({
  type: LOAD_ONE,
  project,
});

export const getProjects = () => async dispatch => {
    const res = await fetch(`/api/projects`);
    dispatch(load(res.data.projects));
  };

export const getProjectDetails = (id) => async (dispatch) => {
  console.log('ID:', id)
  const res = await fetch(`/api/projects/${id}`);
  console.log('PROJECT DATA:',res.data.project);
  dispatch(loadOne(res.data.project));
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
