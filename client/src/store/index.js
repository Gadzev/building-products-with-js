// npm packages
import {createStore, applyMiddleware, compose} from 'redux';
import {createEpicMiddleware} from 'redux-observable';

// our packages
import rootReducer from './rootReducer';
import rootEpic from './rootEpic';

// instantiate epic middleware
const epicMiddleware = createEpicMiddleware(rootEpic);

// pick debug or dummy enchancer
const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

// create store
const store = createStore(rootReducer, composeEnchancers(applyMiddleware(epicMiddleware)));

export default store;
