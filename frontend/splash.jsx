import React from 'react';
import axios from 'axios';
import APIKEYS from '../config.js';

class Splash extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {photo: ""}
  }

  componentDidMount() {
    let page = Math.floor(10 * Math.random());
    let x = Math.floor(29 * Math.random());
    console.log(x);
    axios.get(`https://api.unsplash.com/search/photos/?page=${page}&per_page=30&query=nature&client_id=${APIKEYS.photos}`)
    .then((res) => {
      console.log(res.data.results)
      this.setState({photo: res.data.results[x].urls.regular})
    })
    .catch((error) => {
      this.setState({photo:'https://source.unsplash.com/random'})
    })
  }

  render() {
    let photo = this.state.photo

    return(
      <div className="splash">
        <img className="splash-photo" src={this.state.photo}/>
      </div>
    )
  }
}

export default Splash
