import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '../../styles/bootstrap.min.css'; 
import './SecondsCounter.css'; 

class SecondsCounter extends Component {
  render() {
    const { seconds } = this.props;

    const firstDigit = seconds % 10;
    const secondDigit = Math.floor((seconds / 10) % 10);
    const thirdDigit = Math.floor((seconds / 100) % 10);

    return (
      <div className="counter">
        <div className="time-box">
          <div className="page">{thirdDigit}</div>
          <div className="page">{secondDigit}</div>
          <div className="page">{firstDigit}</div>
        </div>
        <div className="card text-center paper-effect">
          <div className="card-body">
            <h1 className="card-title"><FontAwesomeIcon icon={faClock} /> Tiempo transcurrido</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondsCounter;
