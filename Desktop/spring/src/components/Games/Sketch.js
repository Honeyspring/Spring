import React,{Component} from 'react';
//import { Link } from 'react-router-dom';

import './Sketch.css';

class Sketch extends Component {
    constructor(props){
        super( props);
          this.state={
           rowSelected:"",
            colorSelected:"",
            columnSelected:"",
           
          }
          this.handleInput= this.handleInput.bind(this);
      this.row = this.row.bind(this);
       this.column = this.column.bind(this);
       this.colorPick = this.colorPick.bind(this);
       this.unDo = this.unDo.bind(this);
      
    }

componentDidMount(){
   
}
   
 row(){
       
    }


column=()=>{
 
        }
     
 colorPick=()=>{
   
}  
  
unDo=()=>{
     
} 

handleInput(event){
  this.setState({[event.target.name]:event.target.value}); 
}
        

   render(){

    return( 
      <form class="inline ba dark-gray b--black-10 w-50-m  mw9 w-100 shadow-5" >
        
                <label htmlFor="column">COLUMN(S)</label>
             
                <input className="db fw6 w-50" type="text" id="columnSelected"  onChange={this.onhandleInputChange} name="columnSelected" placeholder="number of column(s)"/>
             
                <label htmlFor="rows">ROW(s)</label>
             
                <input className="db fw6 w-50" type="text" id="rowSelected" onChange={this.onhandleInputChange} name="rowSelected" placeholder="number of row(s)"/>
            
                <label htmlFor="color">COLOR</label>
              
                <input className="db btn colr fw6 w-25" type="color" id="color" onChange={this.onhandleInputChange} name="color" placeholder="Choose color"/>
            
                <input className=" w-25 btn colr  pointer" value="RANDOM COLORS"type="submit" id="random"  onChange={this.onhandleInputChange} name="random colors" />
                <input className="w-25 btn ml4 pointer" onClick={this.onSubmitGrid}type="submit" value="SUBMIT"/>
            
          </form>
       

      );
    }
}
export default Sketch;