import { styled } from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 63.7rem auto;

  grid-template-areas: 
  "form background";
`;


export const Form = styled.form `
  grid-area: form;

  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;

  > h1 {
    color: ${({ theme }) => theme.COLORS.ORANGE};

    font-size: 4.8rem;
    font-weight: 700;
  };

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-size: 1.4rem;
    padding-bottom: 4.8rem;
  };

  > h2 {
    font-size: 2.4rem;
    font-weight: 500;

    padding-bottom: 4.8rem;
  };

  > div {
    margin-bottom: .8rem;
    max-width: 34rem;
  };

  > button{
    margin: 1.6rem 0 12.4rem 0;
    
    height: 5.6rem;
    max-width: 34rem;
  };

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    cursor: pointer;
  };
`;


export const Background = styled.div`
  grid-area: background;

  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;