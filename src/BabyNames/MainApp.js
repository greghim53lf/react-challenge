import { useState, useEffect, useRef } from "react";
import axios from "axios";
import BabyName from "./BabyName";
import "./BabyName.css";

export default function MainApp() {
  const [names, setNames] = useState([]);
  const [searchedNames, setSearchedNames] = useState([]);

  // GET LIST OF NAMES
  const getNames = () => {
    axios("http://localhost:3000/babynames").then((res) => setNames(res.data));
  };

  useEffect(() => {
    getNames();
  }, []);

  // SEARCH FOR MATCHING NAMES
  const handleChange = (e) => {
    const { value } = e.target;
    let regex = new RegExp(value, "i");

    let newNames = names.filter((name) => {
      return regex.test(name.name);
    });
    setSearchedNames(newNames);
  };

  // ADD TO FAVORITES
  const handleFavoriteClick = (id) => {
    setNames((prev) =>
      prev.map((name) => {
        return name.id === id
          ? { ...name, isFavorite: !name.isFavorite }
          : name;
      })
    );
  };

    //   HANDLE CLICK FILTER
    const handleClickFilter = (gender) => {
        setSearchedNames(names.filter(name => name.sex === gender))
    }
    
  // CONDITIONALLY RENDER LIST
  const arr = searchedNames.length > 0 ? searchedNames : names;

  return (
    <div>
      <h1>BabyNames</h1>

      <div className="search-bar">
              <input type="text" placeholder="Enter Name" onChange={handleChange} />
              <div className="filter-buttons">
                  <button onClick={handleClickFilter}>All</button>
                  <button onClick={() => handleClickFilter("m")}>Male</button>
                  <button onClick={() => handleClickFilter("f")}>Female</button>
              </div>
      </div>

      <div className="favorites">
        <h2>Favorites: </h2>
        {names.map(
          (name) =>
            name.isFavorite && (
              <BabyName
                data={name}
                key={name.id}
                handleFavoriteClick={handleFavoriteClick}
              />
            )
        )}
      </div>

      <div className="babynames">
        {arr
          .sort((a, b) =>
            a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
          )
          .map(
            (name) =>
              !name.isFavorite && (
                <BabyName
                  data={name}
                  key={name.id}
                  handleFavoriteClick={handleFavoriteClick}
                />
              )
          )}
      </div>
    </div>
  );
}
