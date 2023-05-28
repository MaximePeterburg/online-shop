import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  grid-column-gap: 3rem;
  row-gap: 7%;
  margin: 3rem auto;
  @media screen and (max-width: 800px) {
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    row-gap: 2%;
    margin: 1rem auto;
  }
`;
export const Title = styled.h2`
  text-transform: uppercase;
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
