import React from 'react';
import './Footer.css';
import linkedin from '../icons/linkedin.ico';
import facebook from '../icons/facebook.ico';
import gmail from '../icons/gmail.ico';
import mobile from '../icons/phone.ico';
import github from '../icons/github.ico';
import whatsapp from '../icons/whatsapp.ico';

const Footer = () => {
    
      return (
        <footer className="footer" id="footer">
           
             <a className=' dim' href="https://www.facebook.com/ogunsola.oyindamola"><img className="icons" src={facebook} alt='facebook'/></a>
            <a className=' dim' href="mailto:ogunsola.irene@gmail.com"><img className="icons" src={gmail} alt='gmail'/></a>
            <a className=' dim' href="https://wa.me/+2348092916689"><img className="icons" src={whatsapp} alt='whatsapp'/></a>
            <a className=' dim' href="https://github.com/Honeyspring"><img  className="icons" src={github} alt='github'/></a>
            <a className=' dim' href="tel:+2348092916689"><img  className="icons" src={mobile} alt='mobile'/></a>
            <a className=' dim' href="https://linkedin.com/in/ogunsola-oyindamola"><img className="icons" src={linkedin} alt='linkedin'/></a>
          <a className=' dim' href="http://chreclub.org/Oyin/"> <p className=' link dim  pa3 spring'>&copy;  {new Date().getFullYear()} Honeyspring</p></a>
        
        </footer>
      );
    
}

export default Footer;
