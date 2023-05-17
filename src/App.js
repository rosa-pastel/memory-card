import { useState } from "react";
import "./App.css";
import Cards from "./components/cards";
import Scoreboard from "./components/scoreboard";

export default function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div id="game">
      <div>
        <div>
          <Scoreboard score={score} bestScore={bestScore}></Scoreboard>
          <h1>Monet Memory Game</h1>
        </div>
      </div>
      <Cards
        setScore={setScore}
        setBestScore={setBestScore}
        score={score}
        bestScore={bestScore}
      ></Cards>
    </div>
  );
}
