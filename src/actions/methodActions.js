import * as types from './actionTypes';
import request from 'request';
import Method from '../domain/Method';

export function loadMethodSuccess(method) {
  return {type: types.LOAD_METHOD_SUCCESS, method};
}

export function loadMethod() {
  return function (dispatch) {
    request('http://localhost:3001', (error, response, body) => {
      const methodObj = JSON.parse(body);
      const method = new Method(methodObj.name,
                                methodObj.stage,
                                methodObj.type,
                                methodObj.notation,
                                methodObj.leadHeadCode);
      dispatch(loadMethodSuccess(method));
    });

  };
}
