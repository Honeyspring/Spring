import React,{Component} from 'react';
//import { Link } from 'react-router-dom';
import ChildComponent from "./ChildComponent";
import './Sketch.css';
const initialState={
  rowSelected:0,
   colorSelected:0,
   columnSelected:0,
   numChildren: 0,
   grid:[]
 }
class Sketch extends Component {
    constructor(props){
        super( props);
          this.state=initialState;
          this.onhandleInputChange= this.onhandleInputChange.bind(this);
      this.row = this.row.bind(this);
       this.column = this.column.bind(this);
       this.colorPick = this.colorPick.bind(this);
       this.unDo = this.unDo.bind(this);
       this.onSubmitGrid = this.onSubmitGrid.bind(this);
       this.gridContent =React.createRef();
    }

    componentDidMount(){
      this.setState({
        state: initialState
      
      })
      
     
      console.log(this.state.rowSelected);
    }
   
 row(){
       
    }


column=()=>{
 
        }
     
 colorPick=()=>{
   
}  
  
unDo=()=>{
     
} 

onhandleInputChange(event){
  this.setState({[event.target.name]:event.target.value}); 
  console.log(this.state.rowSelected);
}
 onSubmitGrid=(event)=>{
    event.preventDefault();
 
    let  rootEl = document.documentElement;

      for (let i = 0; i < this.state.rowSelected; i ++  ) {
        for ( let y =0; y < this.state.columnSelected; y++){
         
          rootEl.style.setProperty('--colNum', this.state.columnSelected);
          
       // this.gridContent.current.style.gridTemplateColumns = auto * (this.state.columnSelected) ;
  
        this.state.grid.push(<ChildComponent key={i} number={i} />);
       
        console.log(this.state.grid,this.state.columnSelected,this.gridContent);
        this.setState({
          state: initialState
        
        },()=>{
          let grid = this.state.grid;
          grid.splice(0,grid.length +1)
        })
        }
         rootEl.style.setProperty('--rowNum', this.state.columnSelected);
      //  this.gridContent.current.style.gridTemplateRows  =auto * (this.state.rowSelected);
        console.log(this.state.grid,this.state.rowSelected);
      }
    
} 

   render(){
   
    
    return( 
      <div>
      <form className="inline ba dark-gray b--black-10 w-50-m  mw9 w-100 shadow-5" >
        
                <label htmlFor="column">COLUMN(S)</label>
             
                <input className="db fw6 w-50" type="number" id="columnSelected"  onChange={this.onhandleInputChange} name="columnSelected" placeholder="number of column(s)"/>
             
                <label htmlFor="rows">ROW(s)</label>
             
                <input className="db fw6 w-50" type="number" id="rowSelected" onChange={this.onhandleInputChange} name="rowSelected" placeholder="number of row(s)"/>
            
                <label htmlFor="color">COLOR</label>
              
                <input className="db btn colr fw6 w-25" type="color" id="color" onChange={this.onhandleInputChange} name="color" placeholder="Choose color"/>
            
                <input className=" w-25 btn colr  pointer" value="RANDOM COLORS"type="submit" id="random"  onChange={this.onhandleInputChange} name="random colors" />
                <input className="w-25 btn ml4 pointer" onClick={this.onSubmitGrid} type="submit" value="SUBMIT"/>
            
          </form>
         
          <div className="gridContent" ref={this.gridContent} id="gridContent">
          {this.state.grid }
            </div>

    </div>
      );
    }
}
export default Sketch;