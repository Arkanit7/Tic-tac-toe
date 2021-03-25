import React, { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";

function GameStats() {
  const { isXTurn } = useContext(GameContext);
  return <div>Now is {isXTurn ? "X" : "O"}'s turn.</div>;
}

export default GameStats;
