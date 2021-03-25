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
        <div className="game">
          <div className="game__container">
            <GameStats />
            <div className="game__row">
              <Board />
              <GameHistory />
            </div>
          </div>
        </div>
      </GameProvider>
    </div>
  );
}
