import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';

function Header() {
  return (
    <header className='header'>
      <span className='header-container'>
        <StickyNote2OutlinedIcon />
        <div className='title-container'>
          <h1 className='title'>Sticky Notes Board</h1>  
        </div>
      </span>
    </header>
  )
}

export default Header