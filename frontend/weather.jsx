import React from 'react';
// import WeatherFunctions from '../utils/api';
import axios from 'axios';
import APIKEYS from '../config.js'

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature : '',
      description: '',
      city : '',
      lat : '',
      lon : ''
    }
    this.ktf = this.ktf.bind(this)
  }

  // api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=37&lon=-122&APPID=863f07a3e7ed2906c37b7946eb2e69fe`)
    .then((res) => {
       console.log(res.data);
    })

    axios.get('http://ip-api.com/json/')
    .then((res) => {
      this.setState({ lat : res.data.lat,
                      lon : res.data.lon,
                      city : res.data.city })
    })
    .then(() => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&APPID=${APIKEYS.weather}`)
      .then((res) => {
        this.setState({ temp : res.data.main.temp,
                        description : res.data.weather[0].description})
      })
    })
  }

  ktf(temp) {
    let f = Math.round(((temp - 273.15) * 1.8) + 32)
    return f
  }

  getForecast(lat, lon) {

  }

  render() {
    let temp = this.ktf(this.state.temp)
    let city = this.state.city
    let description = this.state.description

    return(
      <div>Weather
        <div>Current Temperature in {city} : {temp}°F {description}</div>
      </div>
    )
  }
}

export default Weather;
