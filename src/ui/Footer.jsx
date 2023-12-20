import { Link } from "react-router-dom";
import codepen from "../images/codepen.svg"
import codesandbox from "../images/codesandbox.svg"
import GitHubIcon from '@mui/icons-material/GitHub';
import CropSquareIcon from '@mui/icons-material/CropSquare';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer'>
        <div className="footer-links">
          <Link to='https://codepen.io/nicolettamrlo' target="_blank"><img className="svg-link" src={codepen} alt="codepen" target="_blank" /></Link>
          <Link to='https://github.com/nicolettamerlo' target="_blank"><GitHubIcon /></Link>  
          <Link to='https://codesandbox.io/u/nicolettamerlo' target="_blank"><img className="svg-link" src={codesandbox} alt="codesandbox" /></Link>       
        </div>
        <span className="footer-copyright">
          copyright @{new Date().getFullYear()} <Link to='https:nicolettamerlo.com' target="_blank">Nicoletta Merlo</Link>  
        </span>
        
      </div>
    </footer>
  )
}

export default Footer