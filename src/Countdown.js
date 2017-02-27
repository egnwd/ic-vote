import React from 'react';

/**
 * A small react counter.
 */
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {remaining: null};
  }

  componentWillMount() {
    this.tick()
    this.tock = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tock);
  }

  tick() {
    let start = new Date();
    let end = new Date(this.props.end);
    let remaining = this.between(start, end);
    this.setState({remaining: remaining});
  }

  between(start, end) {
    // get total seconds between the times
    var delta = Math.abs(end - start) / 1000;
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400;
    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;
    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;
    // what's left is seconds
    var seconds = Math.floor(delta % 60);

    let betwixt = this.pad(days, 2) + ":";
    betwixt += this.pad(hours, 2) + ":";
    betwixt += this.pad(minutes, 2) + ":";
    betwixt += this.pad(seconds, 2);

    return betwixt;
  }

  pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  render() {
    return (
      <div>
        <h1>{this.state.remaining}</h1>
      </div>
    )
  }
}
export default Counter;
