import React from "react";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import RPS from '../components/Games/RPS';
import "./Home.css";

 
   
  const Game =()=>{
   
     
  return (
  <div>
      <Header/>

  <div className="main">
    
     <RPS/>
      </div>
     <div className="foot">
       <Footer/>
     </div>

   </div>
   

   );
}
 
export default Game