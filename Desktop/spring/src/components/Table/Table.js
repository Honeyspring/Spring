import React from 'react';
import './Table.css';


const Table=({Book})=>{
   
    return(
     
      <div className="content">
      <div className="items grow">
      <img src={Book.imageUrl} alt="Avatar" style={{width:100}}/>
      <div className="detail">
        <h4><b>{Book.title}</b></h4> 
        <p>{Book.author}</p>
        <p>{Book.pages}</p> 
        <p>{Book.status}</p>
        <p>{Book.description}</p>
        <div className="row">
      <button className="edit "> Edit</button>
       <button  className="delete " >Delete</button>
        </div>
      </div>
       
  
  </div>
  </div>
         );
    }

export default Table;