import {combineReducers} from 'redux';
import GlobalState from './global_state';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  globalState: GlobalState,
});

export default rootReducer;
