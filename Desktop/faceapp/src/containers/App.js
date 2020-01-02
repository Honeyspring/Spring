import React ,{Component}from 'react';
import Clarifai from 'clarifai';
import '../App.css';
import Navigation from '../components/Navigation/Navigation';
import SignIn from '../components/SignIn/SignIn';
import Register from '../components/Register/Register';
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
        box:{},
        route:'SignIn',
        IsLoggedIn:false,
        user:{
          username:"",
          id:"",
          email:"",
          password:"",
           entries: 0,
          joined: ""
        }
      }
    
}

loadUser=(data)=>{
this.setState({user:
 { username:data.username,
  id:data.id,
  email:data.email,
  password:data.password,
   entries: data.entries,
  joined: data.joined
 }
})
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
 onRouteChange=(route)=>{
   if(route=== 'SignIn'){
    this.setState({IsLoggedIn: false})
   }else if(route=== 'home'){
    this.setState({IsLoggedIn: true})
   }
   this.setState({route:route});
 }
  onPictureSubmit=()=>{
    //console.log('clicked');
    this.setState({imageUrl:this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
          // URL
    this.state.input )
    .then(response =>{
       if(response){
        fetch("http://localhost:3000/Rank",
        {
          method:"put",
          headers:{"content-Type":"application/json"},
          body:JSON.stringify({
          id:this.state.user.id
                          })
           }
           ).then(response=>response.json())
           .then(count=>{this.setSate(
             Object.assign(this.state.user,
               {entries:count}
             
             )
           )})
          .then(response=>response.json())
          .then(user=>{
              if(user){
                  this.props.loadUser(user);
                  console.log(user);
                 this.props.onRouteChange('home');
              }
              } ) 
        } 
      this.displayFaceBox(this.calculateFaceBoundary(response))
    })
      .catch(err => console.log(err)); 
  }
  render(){ 
   const {IsLoggedIn,box,route,imageUrl,user}= this.state; 
  return(
    <div className='App'>
     <Particles className='particles' params={particlesOptions}/> 
      <Navigation IsLoggedIn={IsLoggedIn} onRouteChange={this.onRouteChange}/>
     {this.state.route ==='home' ?
     
    <div>
       <Logo/>
       <Rank username={user.username}  entries={user.entries}/>
      <InputUrl onInputChange={this.onInputChange}  onPictureSubmit={this.onButtonClick}/>
    < FaceDection box={box} imageUrl={imageUrl}/>
    </div>
     :(route ==='SignIn' ?
  
     <SignIn onRouteChange={this.onRouteChange}/> 
     :  <div>
     <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
     </div>
     )
  
     
  }
    
    </div>
  );
  }
}

export default App;
 
  