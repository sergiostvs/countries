import { useState, useEffect, useRef } from "react";

import "./App.css";
import Header from "./Header";
import SearchIcon from "@mui/icons-material/Search";
import Country from "./Country";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./CountryDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const countriesInputRef = useRef();
  const regionRef = useRef();
  const noCountries = countries.status || countries.message;

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    setCountries(data);
  };

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${searchValue}`
        );
        const data = await response.json();

        setCountries(data);
      };

      try {
        fetchSearch();
      } catch (error) {
        console.log(error);
      }
    } else {
      fetchData();
    }
  };

  console.log(countries);

  return (
    <div className={`app ${darkMode ? "darkMode" : ""}`}>
      <Header onClick={switchMode} darkMode={darkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <div className="app_body">
              <div className="inputs">
                <div className={`search_input ${darkMode ? "darkMode" : ""}`}>
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Buscar país"
                    ref={countriesInputRef}
                    onChange={searchCountries}
                  />
                </div>
                <div className={`select_region ${darkMode ? "darkMode" : ""}`}>
                  <select ref={regionRef}>
                    <option>Todos</option>
                    <option>África</option>
                    <option>Américas</option>
                    <option>Ásia</option>
                    <option>Europa</option>
                    <option>Oceania</option>
                  </select>
                </div>
              </div>

              <div className="countries">
                {!noCountries ? (
                  countries.map((country) => (
                    <Country
                      key={country.ccn3}
                      code={country.cca3}
                      name={country.translations.por.common}
                      capital={country.capital}
                      population={country.population}
                      region={country.subregion}
                      flag={country.flags.svg}
                      darkMode={darkMode}
                    />
                  ))
                ) : (
                  <p>País não encontrado</p>
                )}
              </div>
            </div>
          }
        />
        <Route
          path="country-details"
          element={<CountryDetails darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
