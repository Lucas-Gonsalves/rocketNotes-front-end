import { styled } from 'styled-components';


export const Container = styled.div`
  width: 100%;
  min-height: 11.2rem;

  padding: 1.6rem 2.2rem;
  margin-bottom: 1.6rem;
  border-radius: 1rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};


  > h3 {
    font-size: 2.4rem;
    font-weight: 700;

    padding-bottom: 2.4rem;
  };

  
  > footer {
    display: flex;
    flex-wrap: wrap;
  
    gap: .6rem;
  };
`;