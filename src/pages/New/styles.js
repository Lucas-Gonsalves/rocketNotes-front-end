import { styled } from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 10.6rem auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  > main {
    grid-area: content;

    height: 100%;
    overflow-y: scroll;
  };
`;

export const Form = styled.form`
  max-width: 55.6rem;
  height: 100%;

  margin: 3.8rem auto;

  
  > header {
    display: flex;
    justify-content: space-between;

    margin-bottom: 3.6rem;


    h1 {
      font-size: 3.6rem;
      font-weight: 500;
    };
  };


  > textarea {
    height: 15rem;
    margin: 1.6rem 0 3.4rem 0;
  };


  .Links {
    margin: 1.9rem 0 4.7rem 0;

    display: flex;
    flex-direction: column;
    gap: 1.9rem;
  };


  .Tags {
    margin: 1.9rem 0 3.4rem 0;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    row-gap: .9rem;

    div {
      max-width: fit-content;
    };
  };


  #create-note-button {
    height: 5.6rem;
    margin: 6.8rem 0 9.8rem;
  };
`;