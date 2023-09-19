import { Container, Profile, Logout } from './styles.js';

import { RiShutDownLine } from 'react-icons/ri';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';


export function Header() {

  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [ avatar, setAvatar ] = useState(avatarUrl);


  function HandleSignOut() {
    signOut();
    navigate("/")
    
  };


  function HandleProfile() {
    navigate("/Profile");
  };


  return (
    <Container>

      <Profile 
        onClick={ HandleProfile }
      >

        <img 
          src={ avatar }  
          alt="Imagem de Usuário." 
        />
        
        <div>
          <span>Bem Vindo,</span>
          <strong>{ user.name }</strong>
        </div>

      </Profile>

      <Logout
        onClick={ HandleSignOut }
      >
        <RiShutDownLine/>
      </Logout>

    </Container>
  );
};