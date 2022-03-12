import { useParams, useNavigate } from "react-router";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CountryDetails({ darkMode, countries, refetch }) {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName;
  let population;
  let region;
  let subregion;
  let capital;
  let topLevelDomain;
  let currencies = [];
  let languages = [];
  let borders = [];

  countries.forEach((country) => {
    if (country.alpha3Code === params.countryCode) {
      name = country.name;
      flagImg = country.flags.svg;
      nativeName = country.nativeName;
      population = country.population;
      region = country.region;
      subregion = country.subregion;
      capital = country.capital;
      topLevelDomain = country.topLevelDomain;

      country.currencies?.forEach((currency) => {
        currencies.push(currency.name);
      });

      country.languages?.forEach((language) => {
        languages.push(language.name);
      });

      country.borders?.forEach((border) => {
        borders.push(border);
      });
    }
  });

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="country_details">
      <button className={`back ${darkMode ? "darkMode" : ""}`} onClick={goBack}>
        <ArrowBackIcon />
        <p>Voltar</p>
      </button>

      <div className="country_details_body">
        <div className="img_container">
          <img src={flagImg} alt="" />
        </div>
        <div className="info">
          <h2>{name}</h2>
          <div className="info_container">
            <div className="left_info">
              <p>
                Nome oficial:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {nativeName}
                </span>
              </p>
              <p>
                População:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {population}
                </span>
              </p>
              <p>
                Região:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {region}
                </span>
              </p>
              <p>
                Sub Região:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {subregion}
                </span>
              </p>
            </div>
            <div className="right_info">
              <p>
                Capital:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {capital}
                </span>
              </p>
              <p>
                Domínio:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  {topLevelDomain}
                </span>
              </p>
              <p>
                Moeda(s):{" "}
                {currencies.map((currency) => {
                  if (currencies.indexOf(currency) !== currencies.length - 1) {
                    return (
                      <span
                        key={currency}
                        className={`values ${darkMode ? "darkMode" : ""}`}
                      >
                        {" "}
                        {currency},
                      </span>
                    );
                  } else {
                    return (
                      <span
                        key={currency}
                        className={`values ${darkMode ? "darkMode" : ""}`}
                      >
                        {" "}
                        {currency}
                      </span>
                    );
                  }
                })}
              </p>
              <p>
                Idiomas:
                {languages.map((language) => {
                  if (languages.indexOf(language) !== languages.length - 1) {
                    return (
                      <span
                        key={language}
                        className={`values ${darkMode ? "darkMode" : ""}`}
                      >
                        {" "}
                        {language},
                      </span>
                    );
                  } else {
                    return (
                      <span
                        key={language}
                        className={`values ${darkMode ? "darkMode" : ""}`}
                      >
                        {" "}
                        {language}
                      </span>
                    );
                  }
                })}
              </p>
            </div>
          </div>
          Fronteira com:
          {borders.length ? (
            borders.map((border) => (
              <div
                key={border}
                className={`border-country ${darkMode ? "darkMode" : ""}`}
                onClick={() => {
                  refetch();
                  navigate(`/${border}`);
                }}
              >
                {border}
              </div>
            ))
          ) : (
            <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
              <p>Sem fronteiras</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
