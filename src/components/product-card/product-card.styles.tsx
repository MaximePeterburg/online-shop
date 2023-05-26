import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  margin: 20px;
  width: 20%;
  display: flex;
  flex-direction: column;
  height: 350px;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    height: 60%;
    object-fit: cover;
    margin-bottom: 5px;
  }
  button {
    width: 80%;
    /* opacity: 0.7; */
    position: absolute;
    top: 240px;
    /* display: none; */
  }
  &:hover {
    background-color: rgb(220, 223, 232);

    /* img {
      opacity: 0.8;
    } */
    button {
      opacity: 0.85;
      display: flex;
    }
  }
  @media screen and (max-width: 800px) {
    width: 40vw;
    margin: 0;
  }
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 25%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
`;

export const Price = styled.span`
  width: 25%;
`;
