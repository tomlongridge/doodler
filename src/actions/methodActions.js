import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadMethodSuccess(method) {
  return {type: types.LOAD_METHOD_SUCCESS, method};
}

export function loadMethod() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
//    return CourseApi.getAllCourses().then(courses => {
      dispatch(loadMethodSuccess({name: "Cambridge Minor"}));
//    }).catch(error => {
//      throw(error);
//    });
  };
}
