import { createStore, compose } from 'redux';
import DevTools from '../containers/DevTools';
import reducer from '../reducers';

const enhancer = compose(
  DevTools.instrument()
);

const store = createStore(reducer, enhancer);
export default store;
