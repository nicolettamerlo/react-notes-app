/* eslint-disable react/prop-types */
import DoneIcon from '@mui/icons-material/Done';

function Swatch({curColor, color, onColorChange}) {

  return (
    <li key={color.id}
      className='swatch'
      style={{ backgroundColor: color.hex }}
      onClick={() => onColorChange(color.id)}
  >
    {curColor === color.id && <DoneIcon />}
  </li>
  )
}

export default Swatch