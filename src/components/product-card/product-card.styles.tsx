import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: black;
  margin: 20px 20px;
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
    opacity: 0.7;
    position: absolute;
    top: 250px;
    display: none;
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  margin-top: 25%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
  margin-left: 15px;
`;

export const Price = styled.span`
  width: 20%;
`;
