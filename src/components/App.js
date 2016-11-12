import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Header from './Header.js';
import MethodPage from './MethodPage.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <MethodPage />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
