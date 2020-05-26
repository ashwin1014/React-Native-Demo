/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './app/App';
import {name as appName} from './app.json';

import store from './app/store';

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWrapper);
