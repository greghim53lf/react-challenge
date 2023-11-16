import { useState } from "react";
import Sentence from "./Sentence";
import WordsProvider from "./WordsProvider";
import "./style.css";

export default function MainApp() {
  const [favorites, setFavorites] = useState([]);

    const addFavorite = (sentence) => {
      if (favorites.includes(sentence)) return
    setFavorites((prev) => [...prev, sentence]);
    };
    
    const handleDelete = sentence => {
        setFavorites(prev => prev.filter(favorite => sentence !== favorite))
    }

  return (
    <div className="mainApp">
      <WordsProvider>
        <Sentence addFavorite={addFavorite} favorites={favorites} setFavorites={setFavorites}/>
        <Sentence addFavorite={addFavorite} favorites={favorites} setFavorites={setFavorites}/>
        <Sentence addFavorite={addFavorite} favorites={favorites} setFavorites={setFavorites}/>
        <Sentence addFavorite={addFavorite} favorites={favorites} setFavorites={setFavorites}/>
      </WordsProvider>
        <div className="favorites">
              <h2>Favorites</h2>
              {favorites.length === 0 && <h3>You have no favorite sentence.</h3>}
          {favorites.map((favorite, index) => (
            <div className="favorite" key={index}>
              {favorite} <span onClick={() => handleDelete(favorite)} className="delete-button">x</span>
            </div>
          ))}
        </div>
    </div>
  );
}
