import { styled } from 'styled-components';


export const Container = styled.button`

  background: none;
  border: none;
 
  color: ${({ theme, $isActive }) => $isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
  font-weight: 400;
  font-size: 1.8rem; //inspect Later
`;