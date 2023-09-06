import { Container, Link, BookMarks, Content } from './styles.js';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { Button } from '../../components/Button';


export function Details() {
  
  return (

    <Container>
      <Header />

      <main>
        <Content>


          <ButtonText 
          title="Excluir Nota"
          $isActive={true}
          />

          <h1>Introdução ao React</h1>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries, but also
            the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem
            Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>


          <Section title="Links Úteis">
            <Link>

              <li>
                <a href='https://www.rocketseat.com.br/'>
                  https://www.rocketseat.com.br/
                </a>
              </li>

              <li>
                <a href='https://www.rocketseat.com.br/'>
                  https://www.rocketseat.com.br/
                </a>
              </li>

            </Link>
          </Section>

          <Section title="Marcadores">

            <BookMarks>
              <Tag title="TAGhfweohfo"/>
              <Tag title="1111111111111111111111111"/>
              <Tag title="TAGhfwçkhasdf"/>
              <Tag title="TAbfçkhasdf"/>
              <Tag title="TAbfçkhasdf"/>
              <Tag title="TAbfçkhasdf"/>
            </BookMarks>

          </Section>

          <Button title = "Voltar" />
        </Content>
      </main>

    </Container>
  );
};