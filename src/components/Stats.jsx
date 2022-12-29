import Button from "./Button";
import "./Stats.css";

export default function Stats(props) {
    const {rights, onPlayAgainClick} = props;
    return <div className="stats-div">
        <p className="stats-text">You scored {rights}/4 answers</p>
        <Button onClick={onPlayAgainClick} className="stats-btn dark-purple-btn">Play Again</Button>
    </div>;
}