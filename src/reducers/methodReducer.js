import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function methodReducer(state = initialState.method, action) {

  switch (action.type) {
    case types.LOAD_METHOD_SUCCESS:
      return action.method;
  }

  return state;
}
