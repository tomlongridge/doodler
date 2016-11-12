import React, {PropTypes} from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div id="navbar" className="collapse navbar-collapse navbar-right">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Search</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
