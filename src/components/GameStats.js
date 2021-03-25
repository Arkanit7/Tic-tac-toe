import React, { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";

function GameStats() {
  const { isXTurn, winner } = useContext(GameContext);
  return (
    <div className="game__stats">
      {winner
        ? `THE WINNER IS ${winner}`
        : `Now is ${isXTurn ? "X" : "O"}'s turn.`}
    </div>
  );
}

export default GameStats;
