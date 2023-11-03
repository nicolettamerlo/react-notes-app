/* eslint-disable react/prop-types */
import { useRef, useState } from 'react';
import EditModal from '../../ui/EditModal';
import ConfirmModal from '../../ui/ConfirmModal';
import ColorModal from '../../ui/ColorModal';
import { getColorById } from '../../services/colors';
import { formatDate } from '../../services/helpers';
import EditIcon from '@mui/icons-material/Edit';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import PaletteIcon from '@mui/icons-material/Palette';


function NoteItem({note}) {

  const [isConfirmModal, setIsConfirmModal] = useState(false);
  const [isColorModal, setIsColorModal] = useState(false);
  const [isEditable, setIsEditable] = useState(false);

  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const handleEdit = () => {
    setIsEditable(true);
    titleRef.current.focus();
    setTimeout(function() {
      contentRef.current.focus();
    }, 100);
  }

  return (
    <div className='noteItem'>
      <div className='note-title' 
        contentEditable={isEditable} 
        suppressContentEditableWarning="true" 
        ref={titleRef}
        style={{ backgroundColor: getColorById(note.color).head}}
      >{note.title}</div>
      <div className='note-body' 
        contentEditable={isEditable} 
        suppressContentEditableWarning="true"
        ref={contentRef}
        style={{ backgroundColor: getColorById(note.color).bg}}
      >{note.content}</div>
        {isConfirmModal && <ConfirmModal setIsConfirmModal={setIsConfirmModal} noteId={note.id} />}
        {isEditable && <EditModal setIsEditable={setIsEditable} noteId={note.id} titleRef={titleRef} contentRef={contentRef} />}
        {isColorModal && <ColorModal setIsColorModal={setIsColorModal} noteId={note.id} />}
      <div className="note-footer"
        style={{ backgroundColor: getColorById(note.color).bg}}
      >
        <div className="date">{formatDate(note.createdAt)}</div>
        <div className='buttons'>
          <EditIcon className='btn-icon' sx={{ fontSize: 19 }} onClick={() => handleEdit()} />
          <DeleteRoundedIcon className='btn-icon' sx={{ fontSize: 19 }} onClick={() => setIsConfirmModal(true)} />
          <PaletteIcon className='btn-icon' sx={{ fontSize: 19 }} onClick={() => setIsColorModal(true)} />
        </div>
      </div>
    </div>
  )
}

export default NoteItem