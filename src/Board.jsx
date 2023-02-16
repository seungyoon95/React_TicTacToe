import React, { useState, useEffect } from "react";
import "./css/Board.css";
import Square from "./Square";

// Display Xs and Os alternating each click, display next user to take an action
// Disable clicks on an already occupied square / when the winner exists
// Determine / Display winner
// Add reset function

const Board = () => {

  return (
    <div className="board">
      <div className="board-ui">
        <h1>Winner: None</h1>
        <button className="board-reset-button">
          Reset
        </button>
        <h3 className="board-next-player">Next Player: </h3>
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
};

export default Board;
