import { useState } from "react";
import { scores } from "./data";
import CountryScore from "./CountryScore";
import All from "./All";
import "./style.css";

function MainApp() {
  const [order, setOrder] = useState([]);
  const [sort, setSort] = useState(false);

  const handleOrder = (a, b) => {
    return sort ? a.s - b.s : b.s - a.s;
  };

  const handleSort = (sort) => {
    setSort((prev) => !prev);
  };

  return (
    <>
      <div className="order" onClick={handleSort}>
        <button>Order</button>
      </div>
      <div className="mainApp">
        <h2>All High Scores</h2>
        <div className="country-score">
          {scores
            .map((score) => score.scores)
            .flat()
            .sort((a, b) => handleOrder(a, b))
            .map((score, index) => (
              <div key={index} className="score">
                <span>{score.n}</span>
                <span>{score.s}</span>
              </div>
            ))}
        </div>
      </div>
      <div className="mainApp">
        <h2>High Scores per Country</h2>
        {scores
          .sort((a, b) =>
            a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
          )
          .map((score) => (
            <CountryScore
              key={score.name}
              name={score.name}
              scores={score.scores}
              sort={handleOrder}
            />
          ))}
      </div>
    </>
  );
}

export default MainApp;
