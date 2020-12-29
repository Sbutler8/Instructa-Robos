import { fetch } from './csrf';

const LOAD = 'category/load';

const load = categories => ({
    type: LOAD,
    categories,
  });

export const getCategories = () => async dispatch => {
    const res = await fetch(`/api/categories`);
    dispatch(load(res.data.categories));
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
    default:
      return state;
  }
};

export default categoryReducer;
