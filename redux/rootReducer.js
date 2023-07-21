import {combineReducers} from 'redux';
import AddProductReducer from './reducer';

const rootReducer = combineReducers({
  products: AddProductReducer,
});

export default rootReducer;

// import {combineReducers} from 'redux';
// import counterReducer from './reducer';

// const rootReducer = combineReducers({
//   // Add your reducers here
//   // For example:
//   counter: counterReducer,
// });

// export default rootReducer;
