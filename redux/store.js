// import {createStore} from 'redux';
// import rootReducer from './rootReducer';

// const configureStore = () => {
//   return createStore(rootReducer);
// };

// // const store = createStore({
// //   reducer: rootReducer,
// // });

// export default configureStore;

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
