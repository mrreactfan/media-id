import { combineReducers } from 'redux';
import MediaidReducer from './reducer_mediaid';

const rootReducer = combineReducers({
  mediaid: MediaidReducer
});

export default rootReducer;
