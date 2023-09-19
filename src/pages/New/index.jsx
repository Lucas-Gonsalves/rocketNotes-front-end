import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem'
import { Button } from '../../components/Button';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';


export function New() {

  const { newNote } = useAuth();
  const navigate = useNavigate();
  
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");

  const [ newTag, setNewTag ] = useState("");
  const [ tags, setTags ] = useState([]);

  const [ newLink, setNewLink ] = useState("");
  const [ links, setLinks ] = useState([]);


  function HandleAddLink() {

    if(newLink.length <= 1) {
      return;
    };
    

    if(links.length >= 1) {

      const linkExists = links.filter(link => link === newLink);

      
      if(linkExists.length >= 1) {

        setNewLink("");
        return;
      };
    };


    setLinks(prevState => [...prevState, newLink]);    
    setNewLink("");
  };
  
  function HandleRemoveLink(linkDeleted) {
    setLinks(prevState => prevState.filter( link => link !== linkDeleted ));
  };


  function HandleAddTag() {
  
    if(newTag.length <= 1) {
      return;
    };


    if(tags.length >= 1) {
      
      const tagExists = tags.filter(tag => tag === newTag);

      if(tagExists.length >= 1) {
        
        setNewTag("");
        return;
      };
    };

    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  };

  function HandleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
  };


  async function HandleNewNote() {

    if(newTag || newLink) {
      return alert("Confirme a tag/link para criação de nota.")
    }

    const note = {
      title,
      description,
      tags,
      links
    };

    await newNote(note);

    setTitle("")
    setDescription("")
    setLinks([])
    setTags([])
  };


  function HandleBack() {
    navigate(-1);
  };



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
              onClick={HandleBack}
            />

          </header>

          <Input 
            value={title}
            placeholder="Título" 
            onChange={ e => setTitle(e.target.value) }
          />


          <TextArea 
            value={description}
            placeholder="Observações" 
            onChange={ e => setDescription(e.target.value) }
          />


          <Section title="Links">
            <div className="Links">

              {
                links.map((link, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={link}
                    onClick={() => { HandleRemoveLink(link) }}
                  />
                )) 
              } 
                
              <NoteItem 
                value={newLink}
                data-isnew="true"
                placeholder="Novo Link"

                onClick={HandleAddLink}
                onChange={e => setNewLink(e.target.value)}
              />

            </div>
          </Section>

          <Section title="Marcadores">
            <div className="Tags">

              {
                tags.map((tag, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => { HandleRemoveTag(tag) }}
                  />
                ))
              }
                
              <NoteItem
                value={newTag}
                data-isnew="true"
                placeholder="Nova Tag"
                
                onChange={e => setNewTag(e.target.value)}
                onClick={HandleAddTag}
              />

            </div>
          </Section>


          <Button
            title="Salvar"
            id="create-note-button"
            onClick={ HandleNewNote }
          />


        </Form>
      </main>

    </Container>
  );
};