import './Footer.css';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <footer>
            <ul className="footerbar1">
                <li><Link to = ''>Terms</Link></li>
                <li><Link to = ''>Privacy policy</Link></li>
                <li><Link to = ''>About US</Link></li>
                <li><Link to = ''>Conact Us</Link></li>
                <li><Link to = 'helpdesk'>Get Help</Link></li>
            </ul> 
            <img src="./EduVista.png" className='footer-IMG' alt="footer-img" />
            <p>&copy;EduVista </p>
        </footer>
    );
}

export default Footer