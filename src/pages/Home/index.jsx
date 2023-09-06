import { Container, Search, Brand, Content, Menu, NewNote } from './styles';

import { FiSearch, FiPlus } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

import { Tag } from '../../components/Tag'; //test


export function Home() {

  return(

    <Container>
      
      <Brand>
        <h1>RocketNotes</h1>
      </Brand> 


      <Header />
     

      <Menu>

        <li>
          <ButtonText 
          title="Todos" 
          isActive={true}
          />
        </li>

        <li>
          <ButtonText 
            title="Frontend" 
            $isActive={false}
          />
        </li>

        <li>
          <ButtonText
            title="Node" 
            $isActive={false}
          />
        </li>

        <li>
          <ButtonText 
            title="React" 
            $isActive={false}
          />
        </li>

      </Menu> 


      <Search>

        <Input 
          icon={ FiSearch }
          placeholder="Pesquisar pelo título"
        />

      </Search> 

     
      <Content>
        
        <Section title="Minhas Notas">

          <Note title="React Modal">
            <Tag title="React" />
          </Note>

          <Note title="Exemplo de Middleware">
            <Tag title="Express" />
            <Tag title="NodeJs" />
          </Note>

        </ Section>

      </Content>
      

      <NewNote>

        <FiPlus />
        <p>Criar Nota</p>

      </NewNote>

    </Container>
  );
};
