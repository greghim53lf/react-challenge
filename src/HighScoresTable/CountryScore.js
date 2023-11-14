export default function CountryScore({ name: country, scores, sort }) {
  return (
    <div className="country-score">
      <h3>HIGH SCORES: {country}</h3>
      <div className="scores">
        {scores.sort((a,b) => sort(a,b)).map((score) => (
          <div key={score.n} className="score">
            <span>{score.n}</span>
            <span>{score.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
