import React, { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
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
  const [board, setBoard] = useLocalStorage(
    "task.game-board",
    Array(9).fill(null)
  );
  const [isXTurn, setIsXTurn] = useLocalStorage("task.game-isXTurn", true);
  const [history, setHistory] = useLocalStorage("task.game-history", []);
  const [winner, setWinner] = useLocalStorage("task.game-winner", null);

  useEffect(() => {
    doWeHaveWinner();
  }, [board]);

  function updateHistory() {
    setHistory((prevHistory) => [...prevHistory, board]);
  }

  function whoWin() {
    for (const [a, b, c] of WINNING_COMBINATIONS) {
      if (board[a] && board[a] === board[b] && board[c] === board[a]) {
        return board[a];
      }
    }
  }

  function doWeHaveWinner() {
    if (whoWin()) setWinner(whoWin());
  }

  function setSquare(index) {
    if (winner) return;
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
    setWinner(null);
    if (num % 2 === 0) setIsXTurn(true);
    else setIsXTurn(false);
    setBoard(history[num]);
    setHistory(history.filter((_board, index) => index < num));
  }
  return (
    <GameContext.Provider
      value={{
        board,
        isXTurn,
        winner,
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
