import React, { useState, useEffect } from "react";
import "./css/Board.css";
import Square from "./Square";

// Display Xs and Os alternating each click, display next user to take an action
// Disable clicks on an already occupied square / when the winner exists
// Determine / Display winner
// Add reset function

const Board = () => {
  const [turnX, setTurnX] = useState(true);
  const [winner, setWinner] = useState("None");
  const [box, setBox] = useState([]);

  const handleClick = (i) => {
    // Winner found, or box occuiped
    if (winner !== "None" || box[i]) {
      return;
    }

    const temp = [...box];

    if (turnX) {  
      temp[i] = "X";
      setBox(temp);
      setTurnX(!turnX);
    } else {
      temp[i] = "O";
      setBox(temp);
      setTurnX(!turnX);      
    }
  };

  // Resets all field to initial state
  const handleReset = () => {
    setTurnX(true);
    setWinner("None");
    setBox([]);
  };

  // calls setWinner when a winner is found
  const determineWinner = (box) => {
    const winCon = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCon.length; i++) {
      const [a, b, c] = winCon[i];
      if (box[a] && box[a] === box[b] && box[b] === box[c]) {
        setWinner(box[a]);
      }
    }
    return null;
  };

  useEffect(() => {
    determineWinner(box);
  }, [box]);

  return (
    <div className="board">
      <div className="board-ui">
        <h1>Winner: {winner}</h1>
        <button className="board-reset-button" onClick={handleReset}>
          Reset
        </button>
        <h3 className="board-next-player">Next Player: {turnX ? "X" : "O"}</h3>
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} box={box[0]} />
        <Square onClick={() => handleClick(1)} box={box[1]} />
        <Square onClick={() => handleClick(2)} box={box[2]} />
      </div>

      <div className="board-row">
        <Square onClick={() => handleClick(3)} box={box[3]} />
        <Square onClick={() => handleClick(4)} box={box[4]} />
        <Square onClick={() => handleClick(5)} box={box[5]} />
      </div>

      <div className="board-row">
        <Square onClick={() => handleClick(6)} box={box[6]} />
        <Square onClick={() => handleClick(7)} box={box[7]} />
        <Square onClick={() => handleClick(8)} box={box[8]} />
      </div>
    </div>
  );
};

export default Board;
