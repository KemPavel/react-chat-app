import { createStore } from 'redux';
import chat from './reducers';
import {addUser} from "./actions";

const store = createStore(chat);

store.dispatch(addUser('Me'));

export default store;
