import { combineReducers } from 'redux';
import sampleReducer from 'reducers/sampleReducer'
import { fromJS, toJS } from 'immutable'

const rootReducer = combineReducers({
  sampleReducer
});

export default rootReducer;
