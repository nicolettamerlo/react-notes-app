import { useSelector } from 'react-redux';
import NewNoteForm from '../features/notes/NewNoteForm';
import NotesList from '../features/notes/NotesList';
import Loader from './Loader';
import { selectAllNotes } from '../features/notes/notesSlice';
import Error from './Error';

function Board() {
  const notes = useSelector(selectAllNotes);
  const status = useSelector(state => state.notes.status);
  
  return (
    <div className='board'>
          {status === 'loading' && <Loader />}
          {status === 'failed' && <Error />}
          {status === 'succeeded' && 
            <>
              <NewNoteForm />
              <NotesList notes={notes} />    
            </>      
          }

    </div>
  )
}

export default Board