import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 2rem auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0.5rem;
  }
`;
