

function Results ({questionBank, userAnswers, restartQuiz}) {

    function getScore() {
        let finalScore = 0;
        userAnswers.forEach((answer, index)  => {
            if (answer === questionBank[index].answer) {
                finalScore++;
            }
        })
        return finalScore;
    }

    const score = getScore();

    
    return (
        <div>
            <h2>Quiz Completed</h2>
            <p>Your Score : {score}/{questionBank.length}</p>
            <button onClick={restartQuiz} className="restart-button">Restart </button>
        </div>
    );
}

export default Results;