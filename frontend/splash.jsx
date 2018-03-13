import React from 'react';
import axios from 'axios';
import APIKEYS from '../config.js';

class Splash extends React.Component {
  constructor(props)  {
    super(props);
    this.state = {photo: ""}
  }

  componentDidMount() {
    axios.get(`https://api.unsplash.com/photos/random/?client_id=${APIKEYS.photos}`)
    .then((res) => {
      console.log(res)
      this.setState({photo: res.data.urls.regular})
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
