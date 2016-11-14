import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NavPanel from './NavPanel';
import LinePanel from './LinePanel';
import OptionPanel from './OptionPanel';
import * as methodActions from '../../actions/methodActions';

class MethodPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      method: Object.assign({}, this.props.method)
    };
  }

  componentWillMount() {
    this.props.actions.loadMethod();
  }

  render() {
    return (
        <div className="container-fluid">
          <h1>{this.props.method.name}</h1>
          <div className="row">
            <NavPanel />
            <LinePanel />
            <OptionPanel />
          </div>
        </div>
    );
  }
}

MethodPage.propTypes = {
  method: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

  // Get method name from URL
  //const methodName = ownProps.params.methodName;

  let method = { name: 'Initial' };
  if (state.method) {
    method = state.method;
  }
debugger;
  return {
    method: method
  };
}


function mapDispatchToProps(dispatch) {
  debugger;
  return {
    actions: bindActionCreators(methodActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodPage);
