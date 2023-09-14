import { Container } from './styles';
import { FiX, FiPlus } from 'react-icons/fi';


export function NoteItem({value, onClick, ...rest}) {

  const isnew = rest['data-isnew']

  return(

    <Container data-isnew={isnew}>

      <input
        type="text"
        value={value}
        readOnly={!isnew}
        {...rest}
      />

      <button
        type='button'
        onClick={onClick}
        className={isnew ? 'button-add' : 'button-delete'}
      >

        { 
          isnew ?  <FiPlus /> : <FiX />
        }

      </button>

    </Container>
  );
};