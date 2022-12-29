import Button from "../Button";
import "./Question.css";
import { shuffle } from "../../helper";

export default function Question(props) {
    const {info, onAnswerClick} = props;
    const {question, id, correct_answer, incorrect_answers, isSelected, selected, allAnswers} = info;
    return <div className="question-div">
        <h2 className="question">{question}</h2>
        <div className="question-buttons-div">
            {allAnswers.map((answer, index) => {
                if(isSelected && selected===index) {
                    return <Button 
                        kind="answer"
                        buttonId={index}
                        isSelected={true} 
                        key={`${id}-${index}`} 
                        className="question-btn">{answer}</Button>
                }
                    return <Button 
                        onClick={() => onAnswerClick(id,index,answer)}
                        kind="answer"
                        buttonId={index}
                        isSelected={false} 
                        key={`${id}-${index}`} 
                        className="question-btn">{answer}</Button>
                
            })}
        </div>
        <hr></hr>
    </div>
}