import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import projectReducer, {currentCategoryReducer} from './projects';
import categoryReducer from './categories';
import functionalityReducer from './functionalities';
import sessionReducer from './session';

const rootReducer = combineReducers({
  session: sessionReducer,
  projects: projectReducer,
  categories: categoryReducer,
  currentCategory: currentCategoryReducer,
  functionalities: functionalityReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

  export default configureStore;
