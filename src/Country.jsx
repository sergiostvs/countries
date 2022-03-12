export default function Country({
  darkMode,
  name,
  capital,
  population,
  region,
  flag,
  showDetails,
  code
}) {

  const showDetailsHandler = () => {
    showDetails(code);
  }

  return (
    <div
      className={`country ${darkMode ? "darkMode" : ""}`}
      onClick={showDetailsHandler}
    >
      <div className="flag_container">
        <img src={flag} alt={name} />
      </div>

      <div className="details">
        <h3 className="name">{name}</h3>
        <p>
          População:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {population}
          </span>
        </p>
        <p>
          Continente:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {region}
          </span>
        </p>
        <p>
          Capital:{" "}
          <span className={`values ${darkMode ? "darkMode" : ""}`}>
            {capital}
          </span>
        </p>
      </div>
    </div>
  );
}
