import { Container, Form, Avatar } from './styles';

import { FiArrowLeft, FiCamera, FiUser, FiMail, FiLock } from 'react-icons/fi';
import avatarPlaceholder from '../../assets/avatar_placeHolder.svg';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';


export function Profile() {

  const { user, updateProfile } = useAuth()
  const navigate = useNavigate()

  const [ name, setName ] = useState(user.name)
  const [ email, setEmail ] = useState(user.email)
  const [ password, setPassword ] = useState(null)
  const [ old_password, setOld_password ] = useState(null)

  const [ avatarFile, setAvatarFile ] = useState(null)
  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [ avatar, setAvatar ] = useState(avatarURL)



  async function HandleUpdate() { // check later (reload page)

    const updated = {
      name,
      email,
      password,
      old_password
    };
    

    const userUpdated = Object.assign(user, updated);
    await updateProfile({ user: userUpdated, avatarFile });
  };


  function HandleBack(){
    navigate(-1);
  };


  function HandleChageAvatar(event) {

    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  };


  return (

    <Container>

      <header>
        
        <FiArrowLeft 
          onClick={ HandleBack }
        />

      </header>

      
      <Form>

        <Avatar>

          <img 
            src={ avatar }  
            alt="Imagem de Usuário." 
          />

          
          <label htmlFor="imageFile">

            <input 
              id="imageFile" 
              type="file" 
              onChange={ HandleChageAvatar }
            />

            <FiCamera />
          </label>

        </Avatar>

  
        <Input 
          icon={FiUser} 
          type='text'
          value={ name }
          placeholder="Nome"
          autoComplete="username"
          onChange={ e => setName(e.target.value) }
        />

        <Input 
          icon={FiMail} 
          type='email'
          value={ email }
          placeholder="Email"
          autoComplete="email"
          onChange={ e => setEmail(e.target.value) }
        />

        <Input 
          icon={FiLock}
          type='password' 
          placeholder="Senha Atual"
          autoComplete="current-password"
          onChange={ e => setOld_password(e.target.value) }
        />

        <Input 
          icon={FiLock} 
          type='password'
          placeholder="Nova Senha"
          autoComplete="password"
          onChange={ e => setPassword(e.target.value) }
        />

        <Button 
          title="Salvar" 
          onClick={ HandleUpdate }
        />

      </Form>

    </Container>

  );
};