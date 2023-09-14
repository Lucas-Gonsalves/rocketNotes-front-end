import { Container, Profile, Logout } from './styles.js';
import { RiShutDownLine } from 'react-icons/ri'

import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom';


export function Header() {

  const { signOut } = useAuth();
  const navigate = useNavigate()


  function HandleSignOut() {
    signOut();
  };


  function HandleProfile() {
    navigate("/Profile");
  };




  return (
    <Container>

      <Profile 
        onClick={ HandleProfile }
      >
        <img src="https://github.com/Lucas-Gonsalves.png"  alt="Imagem de Usuário." />
        
        <div>
          <span>Bem Vindo,</span>
          <strong>Lucas Gonçalves</strong>
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