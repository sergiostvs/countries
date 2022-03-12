import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
    const response = await fetch("https://restcountries.com/v2/all");
    const data = await response.json();

    if (data.status === 404) {
      setCountries([]);
      return;
    }

    setCountries(data);
  };

  const searchCountries = () => {
    const searchValue = countriesInputRef.current.value;

    if (searchValue.trim()) {
      const fetchSearch = async () => {
        const response = await fetch(
          `https://restcountries.com/v2/name/${searchValue}`
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

  const selectRegion = () => {
    const selectValue = regionRef.current.value;

    if (selectValue.trim()) {
      const fetchSelect = async () => {
        const response = await fetch(
          `https://restcountries.com/v2/region/${selectValue}`
        );
        const data = await response.json();

        if (selectValue === "All") {
          try {
            fetchData();
          } catch (error) {
            console.log(error);
          }
          return;
        }
        setCountries(data);
      };

      try {
        fetchSelect();
      } catch (error) {
        console.log(error);
      }
    }
  };

  const showDetails = (code) => {
    navigate(`/${code}`);
  };

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
                  <select ref={regionRef} onChange={selectRegion}>
                    <option value={"All"}>Todos</option>
                    <option value={"africa"}>África</option>
                    <option value={"americas"}>Américas</option>
                    <option value={"asia"}>Ásia</option>
                    <option value={"europe"}>Europa</option>
                    <option value={"oceania"}>Oceania</option>
                  </select>
                </div>
              </div>

              <div className="countries">
                {!noCountries ? (
                  countries.map((country) => (
                    <Country
                      key={country.alpha3Code}
                      code={country.alpha3Code}
                      name={country.name}
                      capital={country.capital}
                      population={country.population}
                      region={country.region}
                      flag={country.flags.svg}
                      showDetails={showDetails}
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
          path="/:countryCode"
          element={
            <CountryDetails
              darkMode={darkMode}
              countries={countries}
              refetch={fetchData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
