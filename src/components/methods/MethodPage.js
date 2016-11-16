import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavPanel from './NavPanel';
import LinePanel from './LinePanel';
import OptionPanel from './OptionPanel';
import * as methodActions from '../../actions/methodActions';
import Method from '../../domain/Method';

class MethodPage extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.props.actions.loadMethod();

    this.state = {
      method: Object.assign({}, this.props.method),
      isLoaded: false
    };
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    if (nextProps.method) {
      this.setState({isLoaded:true});
    }
  }

  componentWillMount() {
  }

  render() {
    debugger;
    if (!this.state.isLoaded) {
      return (
        <p>Loading...</p>
      );
    } else {
    return (
          <div className="container-fluid">
            <h1>{this.props.method.getFullName()}</h1>
            <div className="row">
              <NavPanel />
              <LinePanel />
              <OptionPanel />
            </div>
          </div>
      );
    }
  }
}

MethodPage.propTypes = {
  method: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  // Get method name from URL
  //const methodName = ownProps.params.methodName;
debugger;
let method = null;
  if (state.method) {
    let method = state.method;
  }
  return {
    method: method
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(methodActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodPage);
