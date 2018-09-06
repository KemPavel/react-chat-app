import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import setupSocket from "./sockets";

import handleNewMessage from './sagas';
import userName from './utils/name';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

const socket = setupSocket(store.dispatch, userName);

sagaMiddleware.run(handleNewMessage, {socket, userName});

export default store;
