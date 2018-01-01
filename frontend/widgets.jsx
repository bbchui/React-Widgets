import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Weather from './weather';
import Quote from './quote';

class Root extends React.Component {
  render() {
    return(
      <div>Hello There
        <Clock />
        <Weather />
        <Quote />
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('main'))
});
