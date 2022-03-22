import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ThemeProvider } from "styled-components";
import usePeristedState from "./utils/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";

import Header from "./components/Header";
import SearchIcon from "@mui/icons-material/Search";
import Country from "./components/Country";
import { Route, Routes } from "react-router-dom";
import CountryDetails from "./components/CountryDetails";
import { Container } from "./styles/styles";

function App() {
  const [countries, setCountries] = useState([]);
  const countriesInputRef = useRef();
  const regionRef = useRef();
  const navigate = useNavigate();

  const [darkMode] = useState(false);
  const [theme, setTheme] = usePeristedState("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const noCountries = countries.status || countries.message;

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
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <div className='app'>
          <Header toggleTheme={toggleTheme} />
          <Routes>
            <Route
              path="/"
              element={
                <div className="app_body">
                  <div className="inputs">
                    <div
                      className='search_input'
                    >
                      <SearchIcon />
                      <input
                        type="text"
                        placeholder="Buscar país"
                        ref={countriesInputRef}
                        onChange={searchCountries}
                      />
                    </div>
                    <div
                      className='select_region'
                    >
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
      </Container>
    </ThemeProvider>
  );
}

export default App;
