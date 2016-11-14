import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxStatusReducer';
import method from './methodReducer';
import '../../node_modules/toastr/build/toastr.min.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
  ajaxCallsInProgress,
  method
});

export default rootReducer;
