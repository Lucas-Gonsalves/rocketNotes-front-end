import { Container, Form, Background } from './styles';
import { FiLock, FiMail } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export function SignIn() {

  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);

  const { signIn } = useAuth();
  const navigate = useNavigate();


  async function HandleSignIn() {
    signIn({ email, password });
  };


  function HandleSignUp() {
    navigate("/register");
  };


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
          autoComplete="emial"
          onChange={ e => setEmail(e.target.value) }   
        />

        <Input 
          icon={FiLock}
          type="password"
          placeholder="Senha"
          autoComplete="current-password"
          onChange={ e => setPassword(e.target.value) } 
        />

        <Button 
          title="Entrar"
          onClick={ HandleSignIn }
        />

        <a 
          onClick={HandleSignUp} 
        >
          Criar Conta
        </a>

      </Form>

      <Background />

    </Container>

  );
};