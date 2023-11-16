import { useEffect } from "react";
import { useState } from "react";

export default function Word({ className, words, index, createSentence }) {

  const getRandomIndex = (arr) => {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return randomIndex;
  };

  const [wordIndex, setWordIndex] = useState(getRandomIndex(words));

  useEffect(() => {
    createSentence(words[wordIndex], index)
  }, [wordIndex])

  return (
    <span
      className={className}
      onClick={() => {
        setWordIndex(getRandomIndex(words));
      }}
    >
      {words[wordIndex]}
    </span>
  );
}
