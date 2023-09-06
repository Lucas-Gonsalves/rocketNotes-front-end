import { styled } from 'styled-components';


export const Container = styled.textarea`

  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: none;
  border-radius: 1rem;

  resize: none;
  padding: 2rem;
`;