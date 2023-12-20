/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { contentUpdated, selectNoteById } from '../features/notes/notesSlice';

function EditModal({setIsEditable, noteId, titleRef, contentRef}) {

  const note = useSelector((state) => selectNoteById(state, noteId));
  const dispatch = useDispatch();

  function saveContent() {
    const currTitle = titleRef.current.innerHTML;
    const currContent = contentRef.current.innerHTML
    dispatch(contentUpdated({title:currTitle, content:currContent, id:noteId}))
    setIsEditable(false);
  }

  function dismissChanges() {
    titleRef.current.innerHTML = note.title ;
    contentRef.current.innerHTML = note.content;
    dispatch(contentUpdated({title:note.title, content:note.content, id:noteId}))
    setIsEditable(false);
  }

  return (
    <div className='modal'>
        <div className="modal-options">
            <button className='btn-outline btn-outline-cancel' onClick={dismissChanges}>Cancel</button>
            <button className='btn-outline btn-outline-save' onClick={saveContent}>Save</button>
        </div>
    </div>
  )
}

export default EditModal