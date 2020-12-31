import { fetch } from './csrf';

const LOAD = 'categories/load';
const LOAD_PROJECTS = 'categories/loadProjects';

const load = categories => ({
    type: LOAD,
    categories,
  });

const loadProjects = projects => ({
  type: LOAD_PROJECTS,
  projects,
});

export const getCategories = () => async dispatch => {
    const res = await fetch(`/api/categories`);
    dispatch(load(res.data.categories));
  };

export const getProjectsByCategory = (categoryName) => async (dispatch) => {
  console.log('ID:', categoryName)
  const res = await fetch(`/api/categories/${categoryName}`);
  dispatch(loadProjects(res.data.projects));
};

const initialState = {};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:{
        const allCategories = {};
        action.categories.forEach(category => {
            allCategories[category.id] = category;
        });
        return allCategories;
        }
    case LOAD_PROJECTS:{
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

export default categoryReducer;
