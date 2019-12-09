import { combineReducers } from 'redux';

import usersReducer from './usersReducer';


// combine reducers, although not necessary in this case with only one reducer, I still included it
const reducers = combineReducers({
  users: usersReducer,
});

// make the combined reducers available for import
export default reducers;