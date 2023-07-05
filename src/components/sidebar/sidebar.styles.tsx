import styled from 'styled-components';
import { NavLink } from '../../routes/navigation/navigation.styles';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  overflow: auto;
  background-color: white;
  top: 0px;
  width: 15rem;
  height: 100vh;
  z-index: 1;
`;
export const SidebarLink = styled(NavLink)``;
export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
`;
