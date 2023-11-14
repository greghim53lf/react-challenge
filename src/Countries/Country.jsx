import { Link } from "react-router-dom";

export default function Country({ name, flag, population, capital, region }) {
  return (
    <div className="country">
      <Link to={`/country/${name}`}>
        <div className="country-flag">
          <img src={flag} alt={name} />
        </div>
        <div className="country-details lighter-dark">
          <h2>{name}</h2>
          <div>
            <p>
              <span>Population: </span>
              {population.toLocaleString("en-US")}
            </p>
            <p>
              <span>Region: </span>
              {region}
            </p>
            <p>
              <span>Capital: </span>
              {capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
