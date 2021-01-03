import { fetch } from './csrf';

const LOAD = 'project/load';
const ADD_FEATURE = 'project/addFeature';


const load = projects => ({
    type: LOAD,
    projects,
  });

const addFeature = feature => ({
  type: ADD_FEATURE,
  feature,
});

export const getFeatures = (id) => async dispatch => {
  const res = await fetch(`/api/projects/${id}`);
  dispatch(load(res.data.addedFunctions));
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

const functionalityReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
        const allProjects = {};
        action.projects.forEach(project => {
            allProjects[project.id] = project;
        });
        return allProjects;
    case ADD_FEATURE:
      return {...state, [action.feature.id]: action.feature};
    default:
      return state;
  }
};

export default functionalityReducer;
