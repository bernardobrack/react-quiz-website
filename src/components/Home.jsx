import Button from "./Button"
import "./Home.css";
import {Link} from "react-router-dom";

export default function Home() {
    return <div className="home-div">
        <h1>Quizzical</h1>
        <p>A simple quiz app developed by</p>
        <p id="dev-name">Bernardo Gums Brack</p>
        <Link to="/quiz"><Button className="btn dark-purple-btn">Start Quiz</Button></Link>
    </div>
}