import { useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { CountriesContext } from "./CountriesProvider";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function CountryPage() {
  const history = useNavigate();
  const { countryName } = useParams();
  const countries = useContext(CountriesContext);

  console.log(countries);

  const country = countries.find(
    (country) => country.name.official === countryName
  );

  const {
    name: { official: name, nativeName },
    flags: { png: flag },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders: borderCountries,
  } = country;

  const nativename = nativeName[Object.keys(nativeName)[0]].common;
  const currency = currencies[Object.keys(currencies)[0]].name;
  const language = languages[Object.keys(languages)[0]];

  console.log(country);

  return (
    <div className="country-page default-dark">
      <div className="container">
        <button onClick={() => history(-1)} className="lighter-dark back-btn">
          <FaArrowLeftLong className="icon"/>
          Back
        </button>

        {flag && <div className="country-page-flag">
          <img src={flag} alt={name} />
        </div>}

        {name && <div className="title text">
          <h3>{name}</h3>
        </div>}

        <div className="texts">
          <div className="top-text">
          {nativename && <div className="text">
            <span>Native Name: </span>
            {nativename}
          </div>}
          {population && <div className="text">
            <span>Population: </span>
            {population.toLocaleString("en-US")}
          </div>}
          {region && <div className="text">
            <span>Region: </span>
            {region}
          </div>}
          {subregion && <div className="text">
            <span>Sub Region: </span>
            {subregion}
          </div>}
          {capital && <div className="text">
            <span>Capital: </span>
            {capital}
          </div>}
          </div>
          
        <div className="bottom-text">
          {tld && <div className="text">
            <span>Top Level Domain: </span>
            {tld}
          </div>}
          {currency && <div className="text">
            <span>Currencies: </span>
            {currency}
          </div>}
          {language && <div className="text">
            <span>Language: </span>
            {language}
          </div>}
        </div>
          </div>


        <div className="borders">
          <div className="text">
          <h4>Border Countries: </h4>
        </div>
          <div className="border-countries">
            {borderCountries &&
              countries
                .filter((country) => {
                  return borderCountries.includes(country.cca3);
                })
                .map((country) => {
                  const {
                    name: { common: name, official },
                  } = country;

                  return (
                    <Link className="border-link" key={name} to={`/country/${official}`}>
                      <button className="lighter-dark">{name}</button>
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
