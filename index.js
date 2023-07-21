/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './redux/store';
import {Provider} from 'react-redux';
// import {Provider} from 'react-redux';
// import configureStore from './redux/store';

// const store = configureStore();

// const AppRedux = () => {
//   <Provider store={store}>
//     <App />
//   </Provider>;
// };

const AppRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppRedux);
