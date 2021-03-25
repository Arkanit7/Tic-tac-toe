import React, { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";
import Square from "./Square";

function Board() {
  const { board, setSquare } = useContext(GameContext);
  return (
    <div className="board">
      {board.map((val, i) => (
        <Square setSquare={() => setSquare(i)} key={i}>
          {val}
        </Square>
      ))}
    </div>
  );
}

export default Board;
