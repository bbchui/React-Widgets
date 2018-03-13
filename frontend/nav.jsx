import React from 'react';
import Clock from './clock';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="nav-bar">
        <Clock />
      </div>
    )
  }
}

export default Nav;
