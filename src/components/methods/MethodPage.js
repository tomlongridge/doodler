import React, {PropTypes} from 'react';
import NavPanel from './NavPanel';
import LinePanel from './LinePanel';
import OptionPanel from './OptionPanel';

class MethodPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
        <div className="container-fluid">
          <h1>{this.props.params.method}</h1>
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

export default MethodPage;
