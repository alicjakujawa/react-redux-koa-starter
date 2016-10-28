import { render } from 'react-dom';
import React from 'react';
import App from './containers/App';

const containerEl = document.createElement('div');
document.body.appendChild(containerEl);

render(
  <App />,
  containerEl
);
