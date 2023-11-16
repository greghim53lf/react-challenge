import { createContext } from "react";
import { words } from "./data";

export const WordsContext = createContext();

export default function WordsProvider({ children }) {
  return (
    <WordsContext.Provider value={words}>{children}</WordsContext.Provider>
  );
}
