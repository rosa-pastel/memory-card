export default function Scoreboard(props) {
  return (
    <div id="scoreboard">
      <div>Score: {props.score}</div>
      <div>Best Score: {props.bestScore}</div>
    </div>
  );
}
