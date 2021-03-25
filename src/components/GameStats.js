import React, { useContext } from "react";
import { GameContext } from "../contexts/GameProvider";

function GameStats() {
  const { isXTurn, winner } = useContext(GameContext);
  if (winner) return <div className="">THE WINNER IS {winner}</div>;
  return <div>Now is {isXTurn ? "X" : "O"}'s turn.</div>;
}

export default GameStats;
