import {styled} from 'styled-components';


export const Container = styled.section`
  
  > h2 {

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    
    font-size: 2rem;
    font-weight: 400;

    padding-bottom: 1.6rem;

    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-bottom-style: solid;
    border-bottom-width: 1px;
  };

`;