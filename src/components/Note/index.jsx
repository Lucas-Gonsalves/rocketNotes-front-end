import { Container } from './styles';


export function Note({ title, children, ...rest }) {

  return (

    <Container {...rest}>

      <h3>{title}</h3>

      <footer>
        {children}
      </footer>
      

    </Container>
  );
};