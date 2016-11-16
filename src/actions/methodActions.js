import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import request from 'request';
import Method from '../domain/Method';

export function loadMethodSuccess(method) {
  return {type: types.LOAD_METHOD_SUCCESS, method};
}

export function loadMethod() {
  return function (dispatch) {
    dispatch(beginAjaxCall());

    request('http://localhost:3001', (error, response, body) => {
      const methodObj = JSON.parse(body);
      const method = new Method(methodObj.name,
                                methodObj.stage,
                                methodObj.type,
                                methodObj.notation,
                                methodObj.leadHeadCode);
                                debugger;
      dispatch(loadMethodSuccess(method));
    });

//    return CourseApi.getAllCourses().then(courses => {
//    }).catch(error => {
//      throw(error);
//    });
  };
}
