import { styled } from 'styled-components';


export const Container = styled.div`

  width: 100%;
  height: 5.6rem;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  border-radius: 1rem;
  padding-left: 1.2rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};


  > input {
    width: 100%;
    height: 100%;

    outline: none;
    font-weight: 400;

    border-radius: 1rem;
    border: none;
    background-color: transparent;

    color: ${({ theme }) => theme.COLORS.WHITE}
  };

  
  > svg {
    width: 2rem;
    height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  };
`;