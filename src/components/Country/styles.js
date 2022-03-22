import styled from "styled-components";

export const Container = styled.div`
  .country {
    background: ${(props) => props.theme.colors.card};
    padding: 1rem;
    width: 305px;
    height: 370px;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    border-radius: 1rem;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  .country .flag_container {
    height: 170px;
    width: 100%;
  }

  .country .flag_container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .country .name {
    margin-bottom: 10px;
  }

  .country .values {
    color: gray;
  }

  .country .details {
    padding: 15px;
  }

  .country .details p {
    margin-bottom: 5px;
  }

  .country_details {
    margin: 15px auto 0;
    padding: 15px;
    max-width: 1300px;
    min-height: 100vh;
  }

  .back {
    background: ${(props) => props.theme.colors.card};
    color: ${(props) => props.theme.colors.text};
    border: 0;
    outline: 0;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    margin-bottom: 25px;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  .country_details_body {
    margin: 15px auto 0;
    padding: 15px;
    max-width: 1400px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .img_container {
    flex: 0.5;
  }

  .img_container img {
    width: 100%;
    object-fit: cover;
  }

  .info {
    flex: 0.5;
  }

  .info_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
  }

  .info h2 {
    margin-bottom: 15px;
  }

  .info .values {
    color: gray;
  }

  .border-country {
    padding: 5px 10px;
    background: ${(props) => props.theme.colors.card};
    display: inline-block;
    margin: 10px;
    cursor: pointer;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 800px) {
    .country_details_body {
      flex-direction: column;
    }

    .info_container {
      flex-direction: column;
      align-items: flex-start;
    }

    .left_info {
      margin-bottom: 20px;
    }
  }
`;
