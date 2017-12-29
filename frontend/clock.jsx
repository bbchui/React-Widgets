import React from 'react';

const MONTHS = ["January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
];

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    let interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    this.setState({time: new Date()});
  }

  render() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();
    let ampm = hours > 11 ? "PM" : "AM"
    let month = this.state.time.getMonth();
    let year = this.state.time.getFullYear();
    let day = this.state.time.getDate();

    hours = hours > 11 ? (hours - 12) : hours;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    month = MONTHS[month]

    return(
      <div>
        <div>{hours}:{minutes}:{seconds} {ampm}</div>
        <div>{month} {day}, {year}</div>
      </div>
    )
  }
}

export default Clock;
