import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { created } from './notesSlice'
import ColorModal from '../../ui/ColorModal';
import { getColorById } from '../../services/colors';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';


function NewNoteForm() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isColorModal, setIsColorModal] = useState(false);
  const [chosenColor, setChosenColor] = useState(0);

  const dispatch = useDispatch();

  function addNote() {
    if(title && content) {
      dispatch(created(title, content, chosenColor));
    } else {
      dispatch(created("your note title", "your note content", chosenColor));
    }
    setTitle("");
    setContent("");
    setChosenColor(0);
  }

  return (
    <div className='form-container'>
      <form method="POST" className='form' onSubmit={(e) => e.preventDefault()}>
        <div className='fields'>
          <div className="group-field">
            <label>title</label>
            <input
              placeholder="your note title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="group-field">
            <label>content</label>
            <input
              type="text"
              name="content"
              placeholder="your note content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>            
        </div>
        <div className="buttons">
          <button className='btn-color' style={{ backgroundColor: getColorById(chosenColor).bg}} onClick={() => setIsColorModal(true)}></button>
          {isColorModal && <ColorModal setIsColorModal={setIsColorModal} noteId={null} newNoteColor={setChosenColor} /> }
          <button className='btn-new' onClick={addNote}><StickyNote2Icon />Add</button>
        </div>
      </form>
    </div>

  )
}

export default NewNoteForm