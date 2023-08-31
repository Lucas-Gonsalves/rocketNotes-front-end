import { styled } from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

`;

export const Link = styled.ul`

  list-style: none;

  display: flex;
  flex-direction: column;
  
  gap: 1.2rem;
  margin: 1.6rem auto 2.8rem;

  > li a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  } 

`