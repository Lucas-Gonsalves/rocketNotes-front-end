import { Container, Form, Background } from './styles';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useState } from 'react'; 
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom';
  

export function SignUp() {

  const [ name, setName ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [ password, setPassword ] = useState(null);

  const navigate = useNavigate();

  async function HandleSignUp() {


    if(!name || !email || !password) {
      return alert("Preencha todos os campos para o cadastramento de um usuário.");
    };


    try {
      const response = await api.post("/users", { name, email, password });
      
      setName(null);
      setEmail(null);
      setPassword(null);
      
      alert(response.data.message);

    } catch(error) {

      if(error.response) {
        alert(error.response.data.message);

      } else {
        alert("Não foi possível a criação de um usuário.");
      };
    };
  };


  async function HandleSignIn() {
    navigate(-1);
  };


  return (

    <Container>

      <Background />

      <Form>

        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>


        <Input 
          icon={FiUser}
          type="text"
          value={name}
          placeholder="Nome"
          autoComplete="username"
          onChange={ e => setName(e.target.value) }
        />

        <Input 
          type="text"
          icon={FiMail}
          value={email}
          placeholder="E-mail"
          autoComplete="email"
          onChange={ e => setEmail(e.target.value) }
        />

        <Input 
          icon={FiLock}
          type="password"
          value={password}
          placeholder="Senha"
          autoComplete="current-password"
          onChange={ e => setPassword(e.target.value) }
        />


        <Button 
          title="Cadastrar" 
          onClick={ HandleSignUp }
        />


        <a
          onClick={ HandleSignIn }
        >
          Voltar para o login
        </a>

      </Form>

    </Container>
  );
};