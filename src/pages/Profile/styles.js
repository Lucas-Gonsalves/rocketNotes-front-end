import { styled } from 'styled-components';


export const Container = styled.div`
  
  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas: 
    "header"
    "form"
  ;


  > header {
    grid-area: header;

    display: flex;
    align-items: center;

    padding-left: 12.4rem;

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


export const Avatar = styled.div`
  position: relative;
  margin: -12.4rem auto 6.4rem;

  height: 18.6rem;
  width: 18.6rem;


  > img {
    width: 18.5rem;
    height: 18.6rem;

    border-radius: 50%;
  };

  > label {

    width: 4.8rem;
    height: 4.8rem;

    border-radius: 50%;

    position: absolute;
    bottom: .7rem;
    right: .7rem;

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


export const Form = styled.form`
  grid-area: form;
  padding: 1rem;

  width: 34rem;

  display: flex;
  flex-direction: column;
  gap: .8rem;

  margin: 3rem auto 0rem;


  > div:nth-child(4) {
    margin-top: 1.6rem;
  };


  > button:last-child {
    
    margin-top: 1.6rem;

    height: 5rem;
    width: 100%;
  };
`;  