import React, { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";

function GameHistory() {
  const { history, setTurn } = useContext(GameContext);
  return (
    <div className="history">
      <ol className="history__list">
        {history.map((_board, index) => {
          return (
            <li key={index} className="history__item">
              <button
                onClick={() => setTurn(index)}
                className="history__btn btn"
              >
                Return to turn #{index}.
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default GameHistory;
