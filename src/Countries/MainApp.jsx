import axios from "axios";
import { useState } from "react";
import "./Countries.css";
import Header from "./Header";
import Main from "./Main";
import { Route, Routes } from "react-router-dom";
import CountryPage from "./CountryPage";
import CountriesProvider from "./CountriesProvider";

export default function MainApp() {
  
  const [theme, setTheme] = useState("light");

  const toggleDarkMode = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="main-app" id={theme}>
      <CountriesProvider>
        <Header setToggle={toggleDarkMode} />
        <Routes>
          <Route
            path="/"
            element={<Main />}
          />
          <Route path="/country/:countryName" element={<CountryPage />} />
        </Routes>
      </CountriesProvider>
    </div>
  );
}
