import React, { Component } from 'react';
import { Provider } from 'react-redux';
import DevTools from './DevTools';
import store from '../store/configureStore';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <p>Waiting for super cool content!</p>
          {process.env.NODE_ENV !== 'production' && <DevTools />}
        </div>
      </Provider>
    );
  }
}
