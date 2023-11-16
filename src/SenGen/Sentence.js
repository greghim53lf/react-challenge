import Word from "./Word";
import { useContext, useRef, useState } from "react";
import { WordsContext } from "./WordsProvider";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";

const sentenceObject = {
  0: "The",
  1: "",
  2: "",
  3: "",
  4: "the",
  5: "",
  6: "",
  7: ".",
};

export default function Sentence({favorites, setFavorites}) {
  const [key, setKey] = useState(0);
  const [sentence, setSentence] = useState(sentenceObject);
  const [sentenceString, setSentenceString] = useState("")
  const words = useContext(WordsContext);

  const createSentence = (word, index) => {
    setSentence((prev) => ({ ...prev, [index]: word }));
  };

  useEffect(() => {
    setSentenceString(Object.values(sentence).join(" "));
  }, [sentence]);

  const handleFavorites = (sentence) => {
    if (favorites.includes(sentence)) setFavorites(prev => prev.filter(favorite => favorite !== sentence))
    else if(!favorites.includes(sentence)) setFavorites(prev => [...prev, sentence])
  }
  
  console.log(sentence)
  console.log(sentenceString)
  
  return (
    <div key={key} className="sentence">
      <span className="word">The</span>
      <Word
        index={1}
        createSentence={createSentence}
        className="word adjective"
        words={words.adjectives}
      />
      <Word
        index={2}
        createSentence={createSentence}
        className="word noun"
        words={words.nouns}
      />
      <Word
        index={3}
        createSentence={createSentence}
        className="word verb"
        words={words.verbs}
      />
      <span className="word">the</span>
      <Word
        index={5}
        createSentence={createSentence}
        className="word adjective"
        words={words.adjectives}
      />
      <Word
        index={6}
        createSentence={createSentence}
        className="word noun"
        words={words.nouns}
      />
      <span className="word">.</span>
      <button
        className="sentence-button"
        onClick={() => {
          setKey((prev) => prev + 1);
        }}
      >
        Re-generate!
      </button>
      <div className="favorite-icon" onClick={() => handleFavorites(sentenceString)}>
        {favorites.includes(sentenceString) ? <FaHeart /> : <FaRegHeart />}
      </div>
    </div>
  );
}
