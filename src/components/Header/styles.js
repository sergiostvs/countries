import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: #FFF;
  padding: 1rem;
  width: 100%;
  
  .content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1300px;
    margin: 0 auto;
  }

  .logo{
    strong{
      color: ${(props) => props.theme.colors.logo};
    }
  }
`;