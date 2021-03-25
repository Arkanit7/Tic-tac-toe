import React, { useState, useEffect } from "react";
export const GameContext = React.createContext();

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function GameProvider(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    doWeHaveWinner();
  }, [board]);

  function updateHistory() {
    setHistory((prevHistory) => [...prevHistory, board]);
  }

  function whoWin() {
    for (let combination of WINNING_COMBINATIONS) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[c] === board[a]) {
        return board[a];
      }
    }
  }

  function doWeHaveWinner() {
    if (whoWin()) console.log(whoWin());
  }

  function setSquare(index) {
    if (board[index]) return;
    setBoard((prevBoard) =>
      prevBoard.map((val, i) => {
        if (index === i) return isXTurn ? "X" : "O";
        return val;
      })
    );
    setIsXTurn((prev) => !prev);
    updateHistory();
  }
  function setTurn(num) {
    setBoard(history[num]);
    setHistory(history.filter((_board, index) => index < num));
  }
  return (
    <GameContext.Provider
      value={{
        board,
        isXTurn,
        history,
        setTurn,
        setSquare,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}

export default GameProvider;
