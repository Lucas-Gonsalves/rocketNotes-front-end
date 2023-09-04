import { Container, Form, Avatar } from './styles';

import { FiArrowLeft, FiCamera, FiUser } from 'react-icons/fi';

import { Input } from '../../components/Input';


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

      </Form>


    </Container>

  );
};