import React ,{Component}from 'react';
import Clarifai from 'clarifai';
import '../App.css';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import InputUrl from '../components/InputUrl/InputUrl';
import Rank from '../components/Rank/Rank';
import Particles from 'react-particles-js';
import FaceDection from '../components/FaceDetection/FaceDetection';
 const particlesOptions={
  particles: {
    number: {
      value: 160,
      density: {
          enable: false
      }
  },
  size: {
      value: 10,
      random: true
  },
  move: {
      direction: "left",
      out_mode: "out"
  },
  line_linked: {
      enable: false
  }
},
interactivity: {
  events: {
      onclick: {
          enable: true,
          mode: "remove"
      }
  },
 modes: {
      remove: {
          particles_nb: 10
      }
  }
}
 }
const app= new Clarifai.App({
  apiKey:'37047032eaec4831af5bd77ffb38c7f5',
})
class App extends Component{
  constructor(){
    super();
      this.state={
        input:'',
        imageUrl:'',
        box:{}
      }
    
  }
  onInputChange=(event)=>{
    this.setState({input:event.target.value});
  }
  calculateFaceBoundary=(data)=>{
    const ClarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image =document.getElementById('inputImage');
    const height=Number(image.height);
    const width=Number(image.width);
    console.log(width,height);
    return{
      topRow:ClarifaiFace.top_row * height,
      leftCol:ClarifaiFace.left_col * width,
      bottomRow:height - (ClarifaiFace.bottom_row * height),
      rightCol:width -(ClarifaiFace.right_col * width)
    }
  }
  displayFaceBox=(box)=>{
    console.log(box);
    this.setState({box:box})
  }
  onButtonClick=()=>{
    //console.log('clicked');
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
          // URL
    this.state.input )
      .then(response =>this.displayFaceBox(this.calculateFaceBoundary(response)))
      .catch(err => console.log(err));
  }
  render(){  
  return(
    <div className='App'>
     <Particles className='particles' params={particlesOptions}/> 
      <Navigation/>
       <Logo/>
       <Rank/>
      <InputUrl onInputChange={this.onInputChange}  onButtonClick={this.onButtonClick}/>
    < FaceDection box={this.state.box}imageUrl={this.state.imageUrl}/>
    </div>
  );
  }
}

export default App;
