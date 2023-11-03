import { Link } from "react-router-dom";
import codepen from "../images/codepen.svg"
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer'>
        <div className="footer-links">
          <Link to='https://codepen.io/Nicoletta-Merlo'><img className="svg-link" src={codepen} alt="codepen" /></Link>
        
          <Link to='https://github.com/nicolettamerlo'><GitHubIcon /></Link>          
        </div>
        <span className="footer-copyright">
          nicolettamerlodev@{new Date().getFullYear()}
        </span>
        
      </div>
    </footer>
  )
}

export default Footer