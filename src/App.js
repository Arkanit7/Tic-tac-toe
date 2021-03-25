import React from "react";
import "./App.scss";
import Board from "./components/Board";
import GameHistory from "./components/GameHistory";
import GameStats from "./components/GameStats";
import GameProvider from "./contexts/GameProvider";

export default function App() {
  return (
    <div className="wrapper">
      <GameProvider>
        <GameStats />
        <Board />
        <GameHistory />
      </GameProvider>
    </div>
  );
}
