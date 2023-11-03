import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {colorsData as colors} from '../services/colors';
import { selectNoteById, colorChanged } from '../features/notes/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import Swatch from './Swatch';

// eslint-disable-next-line react/prop-types
function ColorModal({setIsColorModal, noteId, newNoteColor}) {

  const note = useSelector((state) => selectNoteById(state, noteId));
  const [curColor, setCurColor] = useState(note ? note.color : 0);

  const dispatch = useDispatch();


  function changeColor(id) {
    setCurColor(id)
    // if a note exists
    if(note) {
      dispatch(colorChanged({noteId:noteId, colorId: id}))      
    } else { 
       // if a note doesn't exist yet and the modal is in the form
      newNoteColor(id);
      setIsColorModal(false);
    }
  }

  return (
    <div className='modal'>
        <div className="modal-header">
           CHANGE COLOR
          <button className='modal-header-close'><CloseIcon sx={{ fontSize: 24 }} onClick={() => setIsColorModal(false)} /></button>
        </div>
        <ul className="modal-swatches">
          { colors.map(color => <Swatch color={color} key={color.id} curColor={curColor} onColorChange={changeColor} />)}
        </ul>
    </div>
  )
}

export default ColorModal