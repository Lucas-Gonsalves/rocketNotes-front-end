import { Container, Form, Background } from './styles';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignUp() {

  return (

    <Container>

      <Background />

      <Form>

        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>


        <Input 
          icon={FiUser}
          placeholder="Nome"
          type="text"
        />

        <Input 
          icon={FiMail}
          placeholder="E-mail"
          type="text"
        />

        <Input 
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />


        <Button title="Cadastrar" />


        <a>Voltar para o login</a>

      </Form>

    </Container>

  )

};