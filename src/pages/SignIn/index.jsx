import { Container, Form, Background } from './styles';
import { FiLock, FiMail } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {

  return (

    <Container>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça Seu Login</h2>

        <Input 
          icon={FiMail}  
          type="text"
          placeholder="E-mail"     
        />

        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"    
        />

        <Button title="Entrar" />

        <a>Criar Conta</a>

      </Form>

      <Background />

    </Container>

  );
};