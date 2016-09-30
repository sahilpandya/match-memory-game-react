import {
  LOADED_QUESTIONS,
} from '../constants/actions';
import Immutable from 'immutable'

let defaultState = Immutable.fromJS([])
function sampleReducer (state = defaultState, action) {
  switch(action.type) {
    case LOADED_QUESTIONS:
      return Immutable.fromJS(action.response)
      break
    default:
      return state
  }
}

export default sampleReducer
