import { FaSearch } from "react-icons/fa";
import Country from "./Country";
import { useContext, useState } from "react";
import { CountriesContext } from "./CountriesProvider";

export default function Main({ setSearch }) {
    
  const countries = useContext(CountriesContext) 

  const [nameSearch, setNameSearch] = useState("")
  const [regionSearch, setRegionSearch] = useState("")

  return (
    <>
      <main className="default-dark">
        <div className="controls">
          <div className="container">
            <div className="search-bar lighter-dark">
              <FaSearch className="search-icon" />
              <input
                type="text"
                name="country"
                onChange={(e) => {
                  setNameSearch(e.target.value);
                }}
                placeholder="Search for a country..."
              />
            </div>
            <select
              name="region"
              className="lighter-dark"
              onChange={(e) => {
                setRegionSearch(e.target.value);
              }}
            >
              <option value="">Filter By Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>

        <div className="countries-container">
          <div className="container">
            {countries.filter(country => {
              const regex = new RegExp(nameSearch, "i")
              return nameSearch === "" ? country : regex.test(country.name.official) || regex.test(country.capital)
            }).filter(country => {
              const regex = new RegExp(regionSearch, "i")
              return regionSearch === "" ? country : regex.test(country.region)
            }).map((country) => {
              return (
                <Country
                  key={country.flag}
                  flag={country.flags.png}
                  name={country.name.official}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
