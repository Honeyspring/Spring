import React,{Component} from 'react';
//import { Link } from 'react-router-dom';
import handrock from '../icons/handrock_64.png';
import handpaper from '../icons/hand_paper.ico';
import handscissors from '../icons/hand_scissors.ico';
import './RPS.css';
let modal = document.getElementById('modal');
window.onClick= (event)=> {
    if (event.target === modal) {
      modal.style.display = "none";
    }
}
class RPS extends Component {
    constructor(props){
        super( props);
          this.state={
           choices:['ROCK','PAPER','SCISSORS'],
            computerSelection:"",
            playerSelection:"",
            winner:""
          }
      this.computerPlay = this.computerPlay.bind(this);
       this.choiceRock = this.choiceRock.bind(this);
       this.choicePaper = this.choicePaper.bind(this);
       this.choiceScissors = this.choiceScissors.bind(this);
       this.modal = React.createRef();
       this.playRound = this.playRound.bind(this);
    }

// When the user clicks the button, open the modal 
open=()=> {  
    this.modal.current.style.display = "block";
    
    
  }
  
  // When the user clicks on <span> (x), close the modal
 close=()=> {
    this.modal.current.style.display = "none";
    
  }
  
  // When the user clicks anywhere outside of the modal, close it
 
componentDidMount(){
    this.setState({
        computerSelection :this.state.choices[Math.floor(Math.random() * this.state.choices.length)]
    })
 
  console.log(this.state.computerSelection)
}
   
   computerPlay(){
        this.setState({
            computerSelection :this.state.choices[Math.floor(Math.random() * this.state.choices.length)]
        })
     
      console.log(this.state.computerSelection)
      return this.state.computerSelection;
    }


 choiceRock=()=>{
   
    this.setState({playerSelection:"ROCK"},()=>{
        this.computerPlay();
        this.playRound();
        this.open();  
        console.log(this.state.playerSelection);
    })
    return(this.state.playerSelection,this.state.computerSelection,this.state.winner);
    
        }

      
 choicePaper=()=>{
    this.setState({playerSelection:"PAPER"},()=>{
        this.computerPlay();
        this.playRound();
        this.open();  
        console.log(this.state.playerSelection);
    })
    
    return(this.state.playerSelection,this.state.computerSelection,this.state.winner);
}  
  
choiceScissors=()=>{
     this.setState({playerSelection:"SCISSORS"},()=>{
        this.computerPlay();
        this.playRound();
        this.open();  
        console.log(this.state.playerSelection);
    })
   
    return(this.state.playerSelection,this.state.computerSelection,this.state.winner);
} 


  
playRound = () => {
    let {playerSelection ,computerSelection} =this.state;

    if(playerSelection === 'SCISSORS' && computerSelection === 'PAPER'){
      
        return  this.setState({winner: `You win! ${playerSelection} beats ${computerSelection}`});
        
    }
        else if(playerSelection === 'ROCK' && computerSelection === 'SCISSORS'){
        
        return  this.setState({winner: `You win! ${playerSelection} beats ${computerSelection}`});
       
        }

        else if(playerSelection === 'PAPER' && computerSelection === 'ROCK'){
        //console.log(`You win! ${playerSelection} beats ${computerSelection}­`);
        return this.setState({winner: `You win! ${playerSelection} beats ${computerSelection}`});
        
        }

        else if(playerSelection === computerSelection){
        //console.log("Its a draw");
        this.setState({winner: `Its a draw ,You and computer played ${this.state.computerSelection}`});
        return this.state.winner;
        }

        else{
        //console.log(`You Lose! ${computerSelection}­ beats ${playerSelection}`);
        return this.setState({winner: `You Lose! ${computerSelection}­ beats ${playerSelection}`});
        
        }

}
        

   render(){

    return( 
        <div className="container" >
        <div className="flex"  id="flex">
        <article className="grow rock pointer ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"onClick={this.choiceRock} >
        <main className=" rps  black-80">  
        <div className="measure centre">
        <fieldset id="rock" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 center mh0"  > <img src={handrock} className="bg"  alt="honeyspring"/>ROCK</legend>
    
        </fieldset>
       
            </div>
            </main>
     </article> 
      <article className="grow paper pointer ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" onClick={this.choicePaper}>
      <main className=" rps spa4 black-80">  
      <div className="measure centre">
      <fieldset id="paper" className="ba b--transparent ph0 mh0">
      <legend className="f4 fw6 ph0 center mh0" > <img src={handpaper} className="bg"  alt="honeyspring"/>PAPER</legend>
      
      </fieldset>
     
          </div>
          </main>
   </article> 
   <article className=" scissors  grow pointer ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center" onClick={this.choiceScissors}>
   <main className=" rps spa4 black-80">  
   <div className="measure centre">
   <fieldset id="scissors" className="ba b--transparent ph0 mh0">
   <legend className="f4 fw6 ph0 center  mh0" > <img src={handscissors} className="bg"  alt="honeyspring"/>SICOSSORS</legend> 
   
   </fieldset>
  
       </div>
       </main>
</article> 
</div>
        <div className=" modal"ref={this.modal} id="modal">
        
        <article className="modal-content   ba dark-gray b--black-10 mv4 w-100 w-100-m w-100-l mw6 shadow-5 center">
        <span className="close" onClick={this.close}>&times;</span>
        <main className="  spa4 black-80">  
        <div className="measure centre">
        <fieldset className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 center  mh0" >{this.state.winner}</legend> 

        </fieldset>

        </div>
        </main>
        </article> 
        </div>
</div>
      );
    }
}
export default RPS;