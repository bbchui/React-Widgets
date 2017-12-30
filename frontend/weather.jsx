import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition()
  }

  render() {
    return(
      <div>Weather</div>
    )
  }
}

export default Weather;
