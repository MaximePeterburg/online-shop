import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lightBlueColor } from '../cart-item/cart-item.styles';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  min-width: 23rem;
  width: 50%;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${lightBlueColor};
  background-image: linear-gradient(#dcdfe8, #fbfbfb);
  @media screen and (max-width: 800px) {
    min-width: 19rem;
    margin: 1rem 0.1rem;
    padding: 0 1rem 1rem 1rem;
    align-items: center;
    width: 100%;
  }
`;
export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 2rem;
  @media screen and (max-width: 800px) {
    margin: 1rem 0;
    font-size: 1.4rem;
  }
  /* font-size: 28px;
  border: 1px solid black;
  padding: 0.66rem 4rem;
  border-radius: 3rem;
  color: white;
  background-color: black;
  &:hover {
    background-color: white;
    color: black;
  } */
`;
export const redColor = '#d50032';
export const CategoryLink = styled(Link)`
  color: ${redColor};
  font-weight: bold;
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
export const Preview = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr));
  grid-gap: 1rem;
`;
// export const Preview = styled.div`
//   display: grid;

//   @media screen and (max-width: 800px) {
//     grid-template-columns: 1fr 1fr;
//     grid-column-gap: 15px;
//     grid-row-gap: 25px;
//   }
// `;
