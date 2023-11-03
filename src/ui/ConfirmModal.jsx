import CloseIcon from '@mui/icons-material/Close';
import { deleted } from '../features/notes/notesSlice'
import { useDispatch } from 'react-redux';
// eslint-disable-next-line react/prop-types
function ConfirmModal({setIsConfirmModal, noteId}) {

  const dispatch = useDispatch()

  return (
    <div className='modal'>
        <div className="modal-header">
            DELETE NOTE
        <button className='modal-header-close'><CloseIcon sx={{ fontSize: 24 }} onClick={() => setIsConfirmModal(false)} /></button>
        </div>
        <p className='modal-message'>Do you really want to delete this note?</p>
        <div className="modal-options">
            <button className='btn-outline btn-outline-cancel' onClick={() => setIsConfirmModal(false)}>Cancel</button>
            <button className='btn-outline btn-outline-delete' onClick={() => dispatch(deleted({noteId}))}>Yes</button>
        </div>
    </div>
  )
}

export default ConfirmModal