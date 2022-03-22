import { Container } from "./styles";

export default function Country({
  darkMode,
  name,
  capital,
  population,
  region,
  flag,
  showDetails,
  code,
}) {
  const showDetailsHandler = () => {
    showDetails(code);
  };

  return (
    <Container>
      <div
        className='country'
        onClick={showDetailsHandler}
      >
        <div className="flag_container">
          <img src={flag} alt={name} />
        </div>

        <div className="details">
          <h3 className="name">{name}</h3>
          <p>
            População:{" "}
            <span className='values'>
              {population}
            </span>
          </p>
          <p>
            Continente:{" "}
            <span className='values'>
              {region}
            </span>
          </p>
          <p>
            Capital:{" "}
            <span className='values'>
              {capital}
            </span>
          </p>
        </div>
      </div>
    </Container>
  );
}
