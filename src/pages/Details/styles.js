import { styled } from 'styled-components';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  > main {

    display: flex;
    flex-direction: column;

    min-width: 30rem;
    max-width: 55.5rem;
    height: 100%;

    margin: auto;
    
    padding: 6.5rem 2rem 0rem 2rem;

    p {
      text-align: justify;
      padding-bottom: 5.4rem;
    }

     button {
      align-self: flex-end;
    }
  
    h1 {
      padding-top: 6.4rem;
      padding-bottom: 1.6rem;
    }
  }

  > div:last-child {


    display: flex;
    flex-wrap: wrap;
  }
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
`;

export const BookMarks = styled.div`

  gap: .6rem;
  margin-top: 2.1rem;

  display: flex;
  flex-wrap: wrap;
`;
