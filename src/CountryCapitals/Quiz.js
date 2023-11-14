import { useState } from "react";
import { countries } from "./data";

const getCountries = () => {
  const shuffledOptions = countries.sort(() => 0.5 - Math.random());
  const newArray = shuffledOptions.slice(0, 4);
  return newArray;
};

export default function Quiz() {
  const [countries, setCountries] = useState(getCountries());
  const [result, setResult] = useState("");
  const [tries, setTries] = useState(0);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(1);
  const [currentCountryIndex, setCurrentCountryIndex] = useState(
    Math.floor(Math.random() * countries.length)
  );

  const currentCountry = countries[currentCountryIndex];
  
  const finalScoreColor = score < 5 ? "red" : score === 10 ? "gold" : "green";
  let remark;
  if (score === 10) remark = "🙌 Bravo!!!";
  else if (score < 5) remark = "👎 You Can Do Better...";
  else if (score >= 5) remark = "👍 Good Try!";

  const handleAnswer = (answer) => {
    const res = answer === currentCountry.capital;
    setResult(res ? "Right" : "Wrong");
    if (!res) setTries((prev) => prev + 1);
  };

  const handleNextQuestion = () => {
    setResult("");
    setCountries(getCountries());
    setCurrentCountryIndex(Math.floor(Math.random() * countries.length));
    setScore((prev) => (result === "Right" ? prev + 1 : prev));
    setTries(0);
    if (answeredQuestions <= 10) setAnsweredQuestions((prev) => prev + 1);
  };

  const handleRestart = () => {
    setResult("");
    setCountries(getCountries());
    setCurrentCountryIndex(Math.floor(Math.random() * countries.length));
    setScore(0);
    setTries(0);
    setAnsweredQuestions(1);
  };

  return (
    <div className="quiz-app">
      {answeredQuestions <= 10 ? (
        <div className="container">
          <div className="answered-question">Question {answeredQuestions}.</div>
          <div className="tries">
            ATTEMPTS: <span>{tries}/2</span>
          </div>
          <div className="question">
            <h1>What is the capital of {currentCountry.name}</h1>
          </div>
          <div className="options">
            {countries.map((country) => (
              <div key={country.name} className="option">
                <button
                  disabled={result === "Right" || tries === 2}
                  onClick={() => handleAnswer(country.capital)}
                >
                  {country.capital}
                </button>
              </div>
            ))}
          </div>
          <div className="result">
            {result !== "" && (
              <p>
                You are{" "}
                <span
                  style={{
                    color: result === "Right" ? "Green" : "Red",
                  }}
                >
                  {result}!{tries === 2 && "!"}
                </span>
              </p>
            )}
            {tries === 2 && <p>Correct answer: {currentCountry.capital}</p>}
          </div>
          {(result === "Right" || tries === 2) && (
            <div>
              <button className="next-button" onClick={handleNextQuestion}>
                Next {answeredQuestions < 10 && "Question"}
              </button>
            </div>
          )}
          <div className="score">
            SCORE: <span>{score}/10</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <p className="final-score">
            You got <span style={{ color: finalScoreColor }}>{score}</span>/10
            correct.
          </p>
          <p className="remark">{remark}</p>
          <button onClick={handleRestart} className="restart-button">
            RESTART
          </button>
        </div>
      )}
    </div>
  );
}
// npx update-browserslist-db@latest