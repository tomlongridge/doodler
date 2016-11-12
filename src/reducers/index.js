import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import '../../node_modules/toastr/build/toastr.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
  ajaxCallsInProgress
});

export default rootReducer;
