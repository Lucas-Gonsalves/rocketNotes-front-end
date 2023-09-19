import { styled } from 'styled-components';


export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-rows: 10.6rem 12.8rem auto 8rem;  
  grid-template-columns: 25rem auto;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newNote content"
  ;

  > header {
    padding-left: 11.4rem;
  };
  

  ul::-webkit-scrollbar-thumb, div::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.ORANGE}; 
    border-radius: 1rem; 
    height: 1rem;
  };


  ul::-webkit-scrollbar, div::-webkit-scrollbar {
    width: 1px;
    background-color: transparent;
  };
`;


export const Brand = styled.div`
  grid-area: brand;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.ORANGE};

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`;


export const Menu = styled.ul`
  grid-area: menu;
  overflow-y: scroll;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding: 6.4rem 0;

  > li {
    text-align: center;
  };
`;


export const Search = styled.div`
  grid-area: search;

  padding: 6.4rem;
`;


export const Content = styled.div`
  grid-area: content;
  overflow-y: scroll;


  > section {
    padding: 6.4rem; 
    

    h2 {
      margin-bottom: 2.4rem;
    };
  };
`;


export const NewNote = styled.div`
  grid-area: newNote;
  cursor: pointer;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: .8rem;
  font-size: 2rem;
`;