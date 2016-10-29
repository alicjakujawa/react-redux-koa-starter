import { createStore, compose } from 'redux';
import reducer from '../reducers';

const enhancer = compose(

);

const store = createStore(reducer, enhancer);
export default store;
