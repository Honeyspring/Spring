import React from 'react';
import './Header.css';
import logo from '../icons/ive.ico';
import Footer from "../Footer/Footer";
import { NavLink,Link } from 'react-router-dom';

 
  const Header = ({username}) => {
    
      return (
        // <!--Top bar --->
        <div>
        <div className="topbar flex ">
          <div className=" flex-column w-25-l">
        <h1 className="glow">Spring's <i className=" nex">SPACE</i> </h1>
          </div>
          <div className="flex-column  w-25-l">
        <Link to="/"><img  className=' dim logo'src={logo} alt='logo'/></Link>

            </div>
         </div>
        <nav>
        <div className="sidebar" id="sidebar">
          <p id="welcome">`Welcome {username}`</p>
          <div className="sidelink">
          <NavLink to="/" className="f5 link "   exact>Home</NavLink>
          <NavLink to="/Contact" className="f5 link  "  >Contact</NavLink>
          <NavLink to="/About" className="f5 link  "  >About</NavLink>
          <div className=" dropdown " >
          <div className="f5 link  ">  Games</div>
         
          <div className="dropdown-content shadow-5 " id="dropdown-content">
            <NavLink to="/rock-paper-scissors" className="f5 link  "  >ROCK PAPER SCISSORS</NavLink>
            <NavLink to="/etch-a-sketch" className="f5 link  "  >ETCH-A-SKETCH</NavLink>
          </div>
          </div>
          
        
          </div>
          <div className=" side">
          <Footer/>
          </div>
       
        </div>
        </nav>
        
        </div>
      );
    
}

export default Header;
