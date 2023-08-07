import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

class SecondsCounter extends Component {
  render() {
    const { seconds } = this.props;
    return (
      <div className="counter">
        <FontAwesomeIcon icon={faClock} /> {seconds} segundos
      </div>
    );
  }
}

const updateCounter = () => {
  const secondsPassed = Math.floor((Date.now() - startTime) / 1000);
  ReactDOM.render(
    <SecondsCounter seconds={secondsPassed} />,
    document.getElementById('root')
  );
};

const startTime = Date.now();
setInterval(updateCounter, 1000);
