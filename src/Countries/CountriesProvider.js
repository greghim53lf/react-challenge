import axios from "axios";
import { createContext, useState, useEffect } from "react";

export const CountriesContext = createContext()

export default function CountriesProvider({children}) {
    const [countries, setCountries] = useState([])
    
    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(res => setCountries(res.data));
    }, [])
    
  return (
    <CountriesContext.Provider value={countries}>{children}</CountriesContext.Provider>
  )
}
