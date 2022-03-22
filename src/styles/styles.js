import styled from "styled-components";

export const Container = styled.div`
  .app {
    background: ${(props) => props.theme.colors.bg};
    min-height: 100vh;
    height: 100%;
  }

  .app_body {
    margin: 15px auto 0;
    padding: 15px;
    max-width: 1400px;
  }

  .header {
    padding: 15px;
    background: #fff;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  }

  .header_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
  }

  .inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px;
    margin: auto;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .search_input {
      display: flex;
      align-items: center;
      background: #fff;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      padding: 0.5rem;
      border-radius: 5px;
      gap: 5px;
      background: ${(props) => props.theme.colors.card};

      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 1rem;
      }

      input {
        color: ${(props) => props.theme.colors.text};
        margin-left: 0.5rem;
        border: 0;
        background: transparent;
        outline: none;
        font-size: 1rem;
      }
    }

    .select_region {
      width: 300px;
      background: #fff;
      box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
      padding: 5px;
      border-radius: 5px;
      background: ${(props) => props.theme.colors.card};

      @media (max-width: 768px) {
        width: 100%;
      }

      select {
        color: ${(props) => props.theme.colors.text};
        padding: 5px;
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
      }
    }
  }

  .countries {
    max-width: 1400px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 35px;
  }

  
`;
