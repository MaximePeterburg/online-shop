import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DirectoryCategory } from '../directory/directory.component';
import { DirectoryItemContainer } from './directory-item.styles';

export type DirectoryItemProps = {
  category: DirectoryCategory;
};
const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigation = useNavigate();
  const onNavigateHandler = () => {
    navigation(route);
  };
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <h2>{title}</h2>
      <div>
        <img src={imageUrl} alt={`${title}`} />
      </div>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
