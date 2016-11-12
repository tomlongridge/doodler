import React, {PropTypes} from 'react';
import NavPanel from './NavPanel';
import LinePanel from './LinePanel';
import OptionPanel from './OptionPanel';

const MethodPage = () => {
  return (
      <div className="container-fluid">
        <div className="row">
          <NavPanel />
          <LinePanel />
          <OptionPanel />
        </div>
      </div>
  );
};

export default MethodPage;
