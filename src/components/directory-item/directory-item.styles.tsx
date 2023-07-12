import styled from 'styled-components';
export type BackgroundImageProps = {
  imageUrl: string;
};
export const BackgroundImage = styled.div<BackgroundImageProps>`
  height: 100%;
  width: 23%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 300px;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  &:hover {
    cursor: pointer;

    & ${BackgroundImage}, img {
      transform: scale(1.1);
      transition: transform 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    }
  }
`;
