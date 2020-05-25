import React from "react";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Sketch from '../components/Games/Sketch';
import "./Home.css";

  const EtchSketch =()=>{
  
    
  return (
  <div>
      <Header/>

  <div className="main">
    
     <Sketch/>
      </div>
     <div className="foot">
       <Footer/>
     </div>

   </div>
   

   );
}
 
export default EtchSketch;