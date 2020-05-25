import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
import Game from './pages/Game';
import EtchSketch from './pages/EtchSketch';
import PrivateRoute from './PrivateRoute';

const App =()=>{
  
  return( 
   
  <Router >
 
    <Route exact path="/" component={Home} />
    <Route path="/rock-paper-scissors" component={Game} />
    <Route path="/etch-a-sketch" component={EtchSketch} />
    <Route path="/signIn" component={SignIn} />
    <Route path="/Register" component={Register} />
  </Router>
 
  );
  }


export default App;
  
  