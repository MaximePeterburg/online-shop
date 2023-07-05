import styled from 'styled-components';
import { NavLink } from '../../routes/navigation/navigation.styles';

export const SideBarContainer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  overflow: auto;
  background-color: white;
  top: 0px;
  right: 0px;
  height: 100vh;
  z-index: 1;
  box-shadow: 2px 1px 4px 4px rgba(0, 0, 0, 0.5);
`;
export const SidebarLink = styled(NavLink)``;
export const LinkList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
