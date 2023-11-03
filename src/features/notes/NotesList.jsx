import { useSelector } from "react-redux";
import NoteItem from "./NoteItem";
import { selectAllNotes } from './notesSlice';
import Masonry from 'react-layout-masonry';

function NotesList({ notes }) {

  return (
    <div className='notes'>
      <Masonry columns={{ 0:1, 549: 2, 767: 3, 1099: 4, 1299: 5, 1599:6, 1799:7 }} gap={36}>
            {notes.length===0 && <p>Add Your First Note</p>}
            {notes.length>0 && notes.map(note => <NoteItem note={note} key={note.id} />)}
      </Masonry>
      
    </div>
  )
}


export default NotesList