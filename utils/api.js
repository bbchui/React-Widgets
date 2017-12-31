import axios from 'axios';

let _API = '863f07a3e7ed2906c37b7946eb2e69fe';
let _baseURL = 'http://api.openweathermap.org/data/2.5/';

const getQueryStringData = (city) => {
  return {
    q: city,
    type: accurate,
    APPID: _API,
    cnt: 7
  }
}

// http://api.openweathermap.org/data/2.5/weather?q=London&APPID=863f07a3e7ed2906c37b7946eb2e69fe

const getCurrentWeather = () => {
  return axios.get('api.openweathermap.org/data/2.5/weather?q=London')
    .then(forecasteDate => forcastData.data)
}


const getCity = () => {
  axios.get('http://ip-api.com/json/')
  .then((res) => {
    return { lat : res.data.lat,
             lon : res.data.lon }
  })
}

const getCurrentCityWeather = () => {
  // let city = getCity();
  // let url = _baseURL + `weather?lat=${city.lat}&lon=${city.lon}$APPID=` + _API

  // axios.get(`${url}`)
  //   .then(res => res)

  return 'hi'

}

const test = () => {
  console.log("hi");
}
