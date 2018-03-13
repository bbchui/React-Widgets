import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './nav';
import Splash from './splash';
import Clock from './clock';
import Weather from './weather';
import Quote from './quote';

class Root extends React.Component {
  render() {
    return(
      <div>
        <Nav />
        <Splash />
        <Weather />
        <Quote />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'))
});
