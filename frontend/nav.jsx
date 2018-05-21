import React from 'react';
import Clock from './clock';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <nav className="nav-bar">
        <Clock />
      </nav>
    )
  }
}

export default Nav;
