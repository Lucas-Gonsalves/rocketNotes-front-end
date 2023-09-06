import { styled } from 'styled-components';
import backgroundImg from "../../assets/background.png"


export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: auto minmax(20rem, 61.2rem);
 ;

  grid-template-areas: 
    "background form"
  ;
`;


export const Form = styled.form`
  grid-area: form;

  display: flex;
  flex-direction: column;

  margin: auto;
  padding: 1.5rem;

  align-items: center;
  justify-content: center;
  text-align: center;

  max-width: 35rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};

    font-size: 4.8rem;
    font-weight: 700;
  };

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.4rem;

    padding-bottom: 4.8rem;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 500;

    padding-bottom: 4.8rem;
  }

  > div {
    margin-bottom: .8rem;

  }

  > button {
    margin: .8rem 0 15.2rem 0;


    height: 5.6rem;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE}
  }
`


export const Background = styled.div`
  grid-area: background;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
