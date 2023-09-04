import { styled } from 'styled-components';

export const Container = styled.div`
  
  display: grid;

  grid-template-rows: 14.4rem auto;
  grid-template-columns: auto;

  grid-template-areas: 
    "header"
    "form"
  ;

  

  > header {
    grid-area: header;

    display: flex;
    align-items: center;

    padding-left: 14.4rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      width: 2.5rem;
      height: 2.5rem;

      color: ${({ theme }) => theme.COLORS.GRAY_100};

      cursor: pointer;

      transition: .6s;
    };

    svg:hover {
      color: ${({ theme }) => theme.COLORS.ORANGE};
      transition: 1.2s;
    };
  };

`;

export const Form = styled.form`
  grid-area: form;

  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;  


export const Avatar = styled.div`



  > img {
    position: relative;

    width: 18.6rem;
    height: 18.6rem;

    top: -9.2rem;

    border-radius: 50%;
  };

  > label {
    position: relative;

    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;

    left: 13.8rem;
    bottom: 14.4rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    input {

      display: none;
    };

    svg{

      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    };
  };

`;