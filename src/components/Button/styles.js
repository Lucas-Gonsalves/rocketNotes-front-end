import { styled } from 'styled-components';


export const Container = styled.button`

  width: 100%;
  height: 100%;
  
  background: ${({ theme }) => theme.COLORS.ORANGE};
  
  border: none;
  border-radius: 10px;
`;