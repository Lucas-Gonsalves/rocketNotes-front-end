import { styled } from 'styled-components';


export const Container = styled.div`

  padding: 2rem;
  gap: 1.5rem;

  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900 };

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"} ;
  border-radius: 1rem;

  display: flex;
  justify-content: space-between;

  
  > input {
    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE};
    outline: none;
  };


  > input, button {
    border: none;
    background: transparent;
  };


  > button svg {
    color: ${({ theme, isNew }) => isNew ? theme.COLORS.ORANGE : "#FF002E"};
  };
`;