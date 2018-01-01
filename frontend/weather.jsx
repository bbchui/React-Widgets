import React from 'react';
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
      lon : '',
      icon : ''
    }
    this.ktf = this.ktf.bind(this)
    // this.getForecast = this.getForecast.bind(this)
  }

  componentDidMount() {
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
                        description : res.data.weather[0].description,
                        icon : res.data.weather[0].icon})
      })
    })
  }

  ktf(temp) {
    let f = Math.round(((temp - 273.15) * 1.8) + 32)
    return f
  }

  // getForecast() { //api key does not work for daily forecast
  //   axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${this.state.lat}&lon=${this.state.lon}&cnt=7&APPID=${APIKEYS.weather}`)
  //   .then((res) => {
  //     console.log(res);
  //   })
  // }

  render() {
    let temp = this.ktf(this.state.temp)
    let city = this.state.city
    let description = this.state.description
    var img = this.state.icon !== '' ? "http://openweathermap.org/img/w/" + this.state.icon + ".png" : null

    return(
      <div>Weather
        <div>Current Temperature in {city} : {temp}°F {description} <img src={img} alt="image loading"/></div>
      </div>
    )
  }
}

export default Weather;
