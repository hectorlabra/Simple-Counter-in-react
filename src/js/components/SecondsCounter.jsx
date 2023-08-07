import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import '../../styles/bootstrap.min.css'; // Ajusta la ruta según tu estructura

class SecondsCounter extends Component {
  render() {
    const { seconds } = this.props;
    return (
      <div className="counter card text-center p-4">
        <div className="card-body">
          <h1 className="card-title"><FontAwesomeIcon icon={faClock} /> {seconds} segundos</h1>
        </div>
      </div>
    );
  }
}

export default SecondsCounter;
