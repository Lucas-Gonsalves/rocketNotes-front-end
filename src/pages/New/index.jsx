import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button';

export function New() {

  return (

    <Container>

      <Header />

      <main>
        <Form>

          <header>

            <h1>Criar Nota</h1>

            <ButtonText 
              title="Voltar"
              $isActive={false}
            />

          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />

          <Section title="Links">
            <div class="Links">

              <NoteItem value="https://www.rocketseat.com.br/"/>
                
              <NoteItem 
                isNew  
                placeholder="Novo Link"
              />

            </div>
          </Section>

          <Section title="Marcadores">
            <div class="Tags">

              <NoteItem value="React"/>
              <NoteItem value="Nodejs"/>
              <NoteItem value="Express"/>
              <NoteItem value="Nodemon"/>
                
              <NoteItem 
                isNew  
                placeholder="Nova Tag"
              />

            </div>
          </Section>

          <Button
            title="Salvar"
            id="create-note-button"
          />

        </Form>
      </main>

    </Container>

  );
};