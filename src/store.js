import { createStore } from 'redux';
import chat from './reducers';

const store = createStore(chat);

export default store;
