import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  form {
    display: flex;
  }
  @media screen and (max-width: 800px) {
    button {
      display: none;
    }
  }
`;
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
