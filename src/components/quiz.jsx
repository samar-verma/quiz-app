import { useState } from "react";
import Results from "./results";

function Quiz () {
    const questionBank = [
        {
            question: "What is the capital of India",
            options: ["Mumbai","kolkata", "Delhi", "Hydrabad"],
            answer: "Delhi"
        },

        {
            question: "Which lang is used in web app",
            options: ["PHP","Python", "JS", "All"],
            answer: "All"
        },

        {
            question: "What does JSX stands for",
            options: ["Javascript XML","java syntax ex", "just simple x", "None of above"],
            answer: "Javascript XML"
        },
    ];
    
   const initialAnswers = [null, null, null];

   const [userAnswers, setUserAnswers] = useState(initialAnswers);


    const [currentQuestion, setCurrentQuestion] = useState(0);
 
    const [isQuizFinised, setIsQuizFinised] = useState(false);

    const selectedAnswer = userAnswers[currentQuestion];

    function handleSelectionOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }
 
    function goToNext() {
        if (currentQuestion === questionBank.length-1) {
            setIsQuizFinised(true);
        } else {
            setCurrentQuestion(currentQuestion + 1 );
        }
        

    }

    function goToPrev () {
        if (currentQuestion>0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    }

    function restartQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizFinised(false);
    }

    if (isQuizFinised) {
        return <Results userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>
    }


    return <div>
        <h2>Question {currentQuestion + 1}</h2>
        <p>{questionBank[currentQuestion].question}</p>
        {questionBank[currentQuestion].options.map((option) => (
          <button className={"option"+ (selectedAnswer === option ? " selected" : "")} onClick={() => {handleSelectionOption(option)} }>{option}</button>
        
        ))}
       
        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}> Previous </button>
            <button onClick={goToNext} disabled={!selectedAnswer}> 
                {currentQuestion === questionBank.length-1 ? "Finish ": "Next"}</button>
             

        </div>
         
        </div>
}

export default Quiz;