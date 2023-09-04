import { Container, Form, Avatar } from './styles';

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function Profile() {

  return (

    <Container>

      <header>
        <FiArrowLeft />
      </header>

      
      <Form>

        <Avatar>
          <img src="https://github.com/Lucas-Gonsalves.png"  alt="Imagem de Usuário." />

          
          <label htmlFor="imageFile">
            <input 
              id="imageFile" 
              type="file" 
            />

            <FiCamera />
          </label>

        </Avatar>

  
        <Input icon={FiUser} value="Lucas-Gonsalves"/>
        <Input icon={FiMail} value="Lucas@gmail.com"/>

        <Input icon={FiLock} placeholder="Senha Atual"/>
        <Input icon={FiLock} placeholder="Nova Senha"/>

        <Button title="Salvar" />

      </Form>

    </Container>

  );
};