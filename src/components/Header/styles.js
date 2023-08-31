import { styled } from 'styled-components';


export const Container = styled.header`
  grid-area: header;

  min-width: 30rem;
  width: 100%;
  max-height: 10.6rem;

  padding: 2rem 4rem 1.6rem 4.5rem;

  display: flex;

  justify-content: space-between;
  align-items: center;

  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-bottom-style: solid;
  border-bottom-width: 1px;
`; 


export const Profile = styled.div`


  display: flex;

  gap: .9rem;
  align-items: center;

  
  > img {
    
    width: 7rem;
    height: 7rem;

    border-radius: 50%;
  }

  > div {

    display: flex;
    flex-direction: column;
    
    justify-content: center;

    span {
      font-size: 1.4rem;
      font-weight: 400;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
    
    strong {
      font-size: 1.8rem;
    }
  }
`;


export const Logout = styled.button`

  background: none;
  border: none;

  > svg {
    width: 4.9rem;
    height: 3.6rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    transition: .6s;
  }

  > svg:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    transition: 1.2s;
  }
`;