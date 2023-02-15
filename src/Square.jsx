import React from 'react';
import './css/Square.css';

function Square({onClick, box}) {

  return (
    <div className="square" onClick={onClick}>
      <span className="square-text">{box}</span>
    </div>
  );
}

export default Square;
