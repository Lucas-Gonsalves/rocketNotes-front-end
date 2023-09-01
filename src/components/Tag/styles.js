import { styled } from 'styled-components';


export const Container = styled.span`
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  
  font-size: 1.2rem;
  max-width: 15rem;
  font-weight: 400;

  border-radius: .5rem;

  padding: .5rem 1.4rem;

`; 