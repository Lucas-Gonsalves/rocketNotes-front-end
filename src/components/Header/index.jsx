import { Container, Profile, Logout } from './styles.js';

import { RiShutDownLine } from 'react-icons/ri'

export function Header() {

  return (
    <Container>

      <Profile>
        <img src="https://github.com/Lucas-Gonsalves.png"  alt="Imagem de Usuário." />
        
        <div>
          <span>Bem Vindo,</span>
          <strong>Lucas Gonçalves</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>

    </Container>
  )
};