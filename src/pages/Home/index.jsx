import { Container, Search, Brand, Content, Menu, NewNote } from './styles';

import { FiSearch, FiPlus } from 'react-icons/fi';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { Section } from '../../components/Section';
import { Note } from '../../components/Note';

import { Tag } from '../../components/Tag'; 

import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export function Home() {
  
  const navigate = useNavigate();

  const [ title, setTitle ] = useState("")
  const [ notes, setNotes] = useState([])

  const [ showTags, setShowTags ] = useState([])
  const [ tags, setTags ] = useState(null);
  const [ tagsSelected, setTagsSelected ] = useState([])


  function HandleNewNote() {
    navigate("/New");
  };


  function HandleDetails(noteId) {
    navigate(`/Details/${noteId}`);
  };

  
  function HandleTagSelected(tagNAME) {

    if(tagNAME === "all") {
      return setTagsSelected([]);
    };

    const tagAlredyExists = tagsSelected.includes(tagNAME);

    if(tagAlredyExists) {
      setTagsSelected(prevState => prevState.filter(tagSelected =>  tagSelected !== tagNAME ));

    }else {
      setTagsSelected(prevState => [ ...prevState, tagNAME ]);
    };
  };


  useEffect(() => { //fethNotes
    
    async function fethNotes() {
      const response = await api.get(`/notes?title=${title}&tags=${tagsSelected}`);
      setNotes(response.data.notes);
    };

    fethNotes();

  }, [tagsSelected, title]);


  useEffect(() => { //fethTags

    async function fetchTags() {
    const response = await api.get("/tags", {});
      
    setTags(response.data.tags);  
    };

    fetchTags();

  }, []);

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
            $isActive={ tagsSelected.length === 0}
            onClick={ () => { HandleTagSelected("all") }}
          />
        </li>

        {
          tags && tags.map((tag, index) => {
            return (

              <li key={`tag_${index}`}>
                
                <ButtonText 
                  title={String(tag.name)}
                  $isActive={tagsSelected.includes(tag.name)}
                  onClick={() => { HandleTagSelected(tag.name) }}
                />
              
              </li>

            )
          }) 
        }


      </Menu> 


      <Search>

        <Input 
          icon={ FiSearch }
          value={title}
          placeholder="Pesquisar pelo título"
          onChange={e => setTitle(e.target.value)}
        />

      </Search> 

     
      <Content>
        
        <Section 
          className="scroll-customise"
          title="Minhas Notas"
        >

          
          {
            notes && notes.map((note, index) => {

              return (

                <Note 
                  key={`note_${index}`}
                  data={note}
                  title={note.title}
                  onClick={ () => { HandleDetails(note.id) } }
                />

              )
            })
          }

        </ Section>
      </Content>
      

      <NewNote onClick={ HandleNewNote } >

        <FiPlus />
        <p>Criar Nota</p>

      </NewNote>
    </Container>
  );
};
