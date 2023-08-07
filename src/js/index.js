import React from 'react';
import ReactDOM from 'react-dom';
import SecondsCounter from './components/SecondsCounter'; // Ruta correcta

const updateCounter = () => {
  const secondsPassed = Math.floor((Date.now() - startTime) / 1000);
  ReactDOM.render(
    <SecondsCounter seconds={secondsPassed} />,
    document.getElementById('root')
  );
};

const startTime = Date.now();
setInterval(updateCounter, 1000);
