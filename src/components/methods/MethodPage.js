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
    this.state = {
      method: Object.assign({}, this.props.method)
    };
  }

  componentWillMount() {
    this.props.actions.loadMethod();
  }

  render() {
    if (!this.props.method) {
      return (<p>Loading...</p>);
    } else {
      return (
            <div className="container-fluid">
              <div className="row">
                <h1>{this.props.method.getFullName()}</h1>
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
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    method: state.method
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(methodActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MethodPage);
