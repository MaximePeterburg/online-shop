import DirectoryItem from '../directory-item/directory-item.component';
import { DirectoryContainer } from './directory.styles';

export type DirectoryCategory = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
};

const Directory = () => {
  const categories: DirectoryCategory[] = [
    {
      id: 1,
      title: 'Мужская парфюмерия',
      imageUrl: 'https://духи.рф/design/desktop/img/pic/w6.png?version=1679981818',
      route: 'shop/мужские'
    },
    {
      id: 2,
      title: 'Женская парфюмерия',
      imageUrl: 'https://духи.рф/design/desktop/img/pic/w1.png?version=1679981818',
      route: 'shop/женские'
    }
  ];

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category}></DirectoryItem>
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
