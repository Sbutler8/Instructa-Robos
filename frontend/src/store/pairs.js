import { fetch } from './csrf';
const LOAD_ALL = 'project/loadAll';

const loadAll = (categoryId,CategoriesAndProjects) => ({
  type: LOAD_ALL,
  categoryId, CategoriesAndProjects,
});

export const getAllCategoriesAndProjects = (categoryId) => async (dispatch) => {
  const res = await fetch(`/api/projects/all/${categoryId}`);
  dispatch(loadAll(categoryId,res.data.categoriesAndProjects));
};

const initialState = {};

export const pairsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL:{
        return {...state, [action.categoryId]:action.CategoriesAndProjects}
        }
      default:
        return state;
  }
};
export default pairsReducer;
