// import { fetch } from './csrf';

// const LOAD = 'project/load';

// const load = groupedProjects => ({
//     type: LOAD,
//     groupedProjects,
//   });

// export const getGroupedProjects = (categoryName) => async (dispatch) => {
//   const res = await fetch(`/api/categories/${categoryName}`);
//   dispatch(load(res.data.selectedProjects));
// };

// const initialState = {};

// const groupProjectsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOAD:{
//         const allGroupedProjects = {};
//         action.groupedProjects.forEach(project => {
//             allGroupedProjects[project.id] = project;
//         });
//         return groupedProjects;
//         }
//     default:
//       return state;
//   }
// };

// export default groupProjectsReducer;
