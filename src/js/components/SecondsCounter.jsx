import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '../../styles/bootstrap.min.css'; 
import './SecondsCounter.css'; 

class SecondsCounter extends Component {
  render() {
    const { seconds } = this.props;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return (
      <div className="counter">
        <div className="time-box">
          <div className="page">{hours}</div>
          <div className="page">{minutes}</div>
          <div className="page">{remainingSeconds}</div>
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
