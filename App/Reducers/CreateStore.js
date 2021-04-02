import { createStore } from 'redux';

import Reducers from './index';

const store = createStore(Reducers);
export default store;