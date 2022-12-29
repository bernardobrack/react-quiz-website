import Question from "./Question/Question";
import "./QuizPage.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import Loader from "./Loader/Loader";
import { nanoid } from "nanoid";
import Stats from "./Stats";
import { shuffle } from "../helper";

export default function QuizPage() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentAnswers, setCurrentAnswers] = useState([{},{},{},{}]);
    const [overInfo, setOverInfo] = useState({over: false, rights: 0});

    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=4&difficulty=easy")
        .then(response => response.json())
        .then(data => {
            const dataWithId = data.results.map(questionObject => ({
                ...questionObject,
                id: nanoid(),
                allAnswers: shuffle([questionObject.correct_answer, ...questionObject.incorrect_answers])
            }))
            setCurrentAnswers([
                {
                    correctAnswer: dataWithId[0].correct_answer,
                    id: dataWithId[0].id,
                    isSelected: false,
                    selected: 0,
                    value: ""
                },
                {
                    correctAnswer: dataWithId[1].correct_answer,
                    id: dataWithId[1].id,
                    isSelected: false,
                    selected: 0,
                    value: ""
                },
                {
                    correctAnswer: dataWithId[2].correct_answer,
                    id: dataWithId[2].id,
                    isSelected: false,
                    selected: 1,
                    value: ""
                },
                {
                    correctAnswer: dataWithId[3].correct_answer,
                    id: dataWithId[3].id,
                    isSelected: false,
                    selected: 2,
                    value: ""
                }
            ]);
            setData(dataWithId);
            setIsLoading(false);

        });
        
    },[]);
    function handlePlayAgainClick() {
        fetch("https://opentdb.com/api.php?amount=4&difficulty=easy")
        .then(response => response.json())
        .then(data => {
            const dataWithId = data.results.map(questionObject => ({
                ...questionObject,
                id: nanoid(),
                allAnswers: shuffle([questionObject.correct_answer, ...questionObject.incorrect_answers])
            }))
            setCurrentAnswers([
                {
                    correctAnswer: dataWithId[0].correct_answer,
                    id: dataWithId[0].id,
                    isSelected: false,
                    selected: 0,
                    value: ""
                },
                {
                    correctAnswer: dataWithId[1].correct_answer,
                    id: dataWithId[1].id,
                    isSelected: false,
                    selected: 0,
                    value: ""
                },
                {
                    correctAnswer: dataWithId[2].correct_answer,
                    id: dataWithId[2].id,
                    isSelected: false,
                    selected: 1,
                    value: ""
                },
                {
                    correctAnswer: dataWithId[3].correct_answer,
                    id: dataWithId[3].id,
                    isSelected: false,
                    selected: 2,
                    value: ""
                }
            ]);
            setData(dataWithId);
            setOverInfo(prev => ({...prev, over: false, rights: 0}));
        });
    }
    function handleAnswerClick(questionId, answerId, answerValue) {
        setCurrentAnswers(prev => prev.map((answerObject) => {
            if(answerObject.id === questionId) {
                return {
                    ...answerObject,
                    selected: answerId,
                    value: answerValue,
                    isSelected: true
                }
            }
            return {...answerObject}
        })); 
    }
    function handleCheckClick() {
        const rights = currentAnswers.reduce((counter, answer) => {
            if(answer.value === answer.correctAnswer) {
                return counter+=1
            }
            return counter;
        },0)
        setOverInfo(prev => ({...prev, over: true, rights}));
    }
    return <div className="quiz-page-div">
            {!isLoading && data && data.map((questionObject, index) => <Question 
                onAnswerClick={handleAnswerClick}
                key={questionObject.id} 
                info={{...questionObject, ...currentAnswers[index]}}
            />)}
            {isLoading && <Loader/>}
            {!isLoading && !overInfo.over && <Button onClick={handleCheckClick} className="check-btn dark-purple-btn">Check Answers</Button>}
            {!isLoading && overInfo.over && <Stats onPlayAgainClick={handlePlayAgainClick} rights={overInfo.rights}/>}
        </div>
}