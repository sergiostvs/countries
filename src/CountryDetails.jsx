import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function CountryDetails({ darkMode }) {
  return (
    <div className="country_details">
      <button className={`back ${darkMode ? "darkMode" : ""}`}>
        <ArrowBackIcon />
        <p>Voltar</p>
      </button>

      <div className="country_details_body">
        <div className="img_container">
          <img src="" alt="" />
        </div>
        <div className="info">
          <h2>Nome</h2>
          <div className="info_container">
            <div className="left_info">
              <p>
                Nome oficial:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  teste
                </span>
              </p>
              <p>
                População:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  teste
                </span>
              </p>
              <p>
                Região:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  teste
                </span>
              </p>
              <p>
                Sub Região:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  teste
                </span>
              </p>
            </div>
            <div className="right_info">
              <p>
                Capital:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  teste
                </span>
              </p>
              <p>
                Top-level Domain:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  teste
                </span>
              </p>
              <p>
                Moeda(s):{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  teste
                </span>
              </p>
              <p>
                Idiomas:{" "}
                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                  teste
                </span>
              </p>
            </div>
          </div>
          Fronteira com:
          <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>teste</p>
          </div>
          <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>teste</p>
          </div>
          <div className={`border-country ${darkMode ? "darkMode" : ""}`}>
            <p>teste</p>
          </div>
        </div>
      </div>
    </div>
  );
}
