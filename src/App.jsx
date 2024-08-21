import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cell from "./Cell";

const CELLS_IN_A_LINE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const determineWinner = (board) => {
  for (let i = 0; i < CELLS_IN_A_LINE.length; i++) {
    const [x, y, z] = CELLS_IN_A_LINE[i];
    if (board[x] != null && board[x] === board[y] && board[x] === board[z]) {
      return board[x];
    }
  }
  return null;
};

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsPlaying, setXIsPlaying] = useState(true);

  const winner = determineWinner(board);

  const onReset = () => {
    setBoard(Array(9).fill(null));
    setXIsPlaying(true);
  };

  const getStatusMessage = () => {
    if (winner != null) {
      return `player ${winner} wins!!`;
    }
    if (!board.includes(null)) {
      return `its a draw`;
    }

    return `Player ${xIsPlaying ? "X" : "O"} turn`;
  };

  return (
    <div className="app">
      <div aria-live="polite">{getStatusMessage()}</div>
      <div className="board">
        {board
          .map((_, index) => {
            return index;
          })
          .map((cellIndex) => {
            const turn = xIsPlaying ? "X" : "O";
            return (
              <Cell
                key={cellIndex}
                turn={turn}
                disabled={board[cellIndex] != null || winner != null}
                index={cellIndex}
                mark={board[cellIndex]}
                onClick={() => {
                  const newBoard = board.slice();
                  newBoard[cellIndex] = turn;
                  setBoard(newBoard);
                  setXIsPlaying(!xIsPlaying);
                }}
              />
            );
          })}
      </div>
      <button onClick={() => onReset()}>Reset</button>
    </div>
  );
}

export default App;
