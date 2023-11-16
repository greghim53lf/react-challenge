import { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

export default function MainApp() {
  const [question, setQuestion] = useState();
  const [result, setResult] = useState();
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(3);
  const [selectedOption, setSelectedOption] = useState();
  const [highestScore, setHighestScore] = useState(0)

  const getQuestion = () => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=1&difficulty=easy&encode=url3986"
      )
      .then((res) => setQuestion(...res.data.results));
  };

  useEffect(() => {
    getQuestion();
  }, []);

  const checkAnswer = (option) => {
    const res = option === question.correct_answer;
    setSelectedOption(option);
    setResult(res ? "Right" : "Wrong");
    setLives((prev) => (res ? prev : prev - 1));
    setPoints((prev) => (res ? prev + 1 : prev));
    setHighestScore(prev => prev < points ? points : prev)
  };

  useEffect(() => {
    setResult("");
  }, [question]);

  const handleRestart = () => {
    setQuestion();
    setResult("");
    setPoints(0);
    setLives(3);
    getQuestion();
  };

  return (
    <div className="mainApp">
      {lives > 0 ? (
        <div className="container">
          <div className="quiz-state">
            <div className="lives">Lives: {lives}</div>
            <div className="score">Score: {points}</div>
          </div>
          {question && (
            <h1 className="question">
              {decodeURIComponent(question.question)}
            </h1>
          )}
          <div className="options">
            {question &&
              [...question.incorrect_answers, question.correct_answer]
                .sort((a, b) => (a > b ? -1 : 1))
                .map((option, index) => {
                  return (
                    <button
                      id={
                        selectedOption === option && result === "Right"
                          ? "correct"
                          : selectedOption === option && result === "Wrong"
                          ? "wrong"
                          : ""
                      }
                      style={{}}
                      disabled={result === "Right"}
                      key={index}
                      className="option"
                      onClick={() => {
                        checkAnswer(option);
                      }}
                    >
                      {decodeURIComponent(option)}
                    </button>
                  );
                })}
          </div>
          {result !== "" && (
            <div className="result">
              You got the answer{" "}
              <span style={{ color: result === "Right" ? "green" : "red" }}>
                {result}!
              </span>
            </div>
          )}
          {result === "Right" && (
            <div className="button">
              <button
                onClick={() => {
                  getQuestion();
                }}
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="container">
          <h2>GAME OVER</h2>
          <h3 className="final-score">Final score {points}</h3>
          <h4 className="highest-score">Highest score {highestScore}</h4>
          <div className="button">
            <button onClick={handleRestart}>PLAY AGAIN!!!</button>
          </div>
        </div>
      )}
    </div>
  );
}
