import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import hive from '../icons/ive.ico';
import Footer from '../Footer/Footer';

import { isAuthenticated } from '../../repository';
class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            confirmPassword:"",
            username:""
        }
        this.onhandleInputChange =this.onhandleInputChange.bind(this);
        this.onRegister =this.onRegister.bind(this);
    }
    onhandleInputChange=(event)=>{
        this.setState({[event.target.name]:event.target.value});
        
    }
   
    onRegister=(req,res)=>{
    const { password, confirmPassword } = this.state;
    
    if (password !== confirmPassword) {
        alert("Passwords don't match");
    } else {
        fetch("http://localhost:3000/api/auth/signup",
     {
     method:"post",
     headers:{"content-Type":"application/json"},
     body:JSON.stringify({
        username:this.state.username,
         email:this.state.email,
         password:this.state.password
                     })
      }
      )
     .then(response=>response.json())
     .then(user=>{
         if(isAuthenticated()){
            // this.props.loadUser(user);
             window.location = '/'
         }  
    } ).catch(err =>res.status(400).json('cannot store empty data'))
}    
    
}
    render(){

        return(
            <div className="flex cover mt0 br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l  shadow-5 ">
              
        <article className="sign br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6  shadow-5  flex flex-column">
        <main className="pa4 black-80">  
        <div className="measure centre">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f3 fw6 ph0 mh0 center white"> Register</legend>
        <div className="mt3">
            <label className="db fw6 lh-copy f6"  htmlFor="email-address">Email</label>
            <input className="pa2 input-reset  bg-transparent hover-bg hover-white w-100" type="email" onChange={this.handleInputChange}  name="signInEmail"  id="email-address" required="required"/>
        </div>
        <div className="mv3">
            <label className="db fw6 lh-copy f6"  htmlFor="password">Password</label>
            <input className="pa2 input-reset  bg-transparent hover-bg hover-white w-100" type="password"  onChange={this.handleInputChange} name="signInPassword"  id="password" required="required"/>
        </div>
        <div className="mv3">
            <label className="db fw6 lh-copy f6"  htmlFor="confirmPassword" >Confirm Password</label>
            <input className="pa2 input-reset  bg-transparent hover-bg hover-white w-100" type="password"  onChange={this.handleInputChange} name="confirmPassword"  id="confirmPassword" required="required"/>
        </div>
        
        </fieldset>
        <div className="">

        <input className="b ph3 pv2 input-reset br4 ba b-black bg-color bg-transparent w-100 grow pointer f6 dib" onClick={this.onRegister} type="submit" value="Register"/>
       
        </div>
        <div className="lh-copy mt3">
        <p className=" flex">
        <i className="f5 white ">
        Got an Acccount?
        </i>
        <Link to="/SignIn" className="f5 link dim blac" >Sign In</Link>
        </p>
        
        </div>
            </div>
            </main>
     </article> 
   
     <article className=" br3 ba   dark-gray b--black-10 mv4 w-100 w-50-m w-75-l mw7 shadow-5 center flex flex-column">
      <h1>welcome to my world</h1>
      <img src={hive} className="ico center"  alt="honeyspring"/>

      <Footer/>
     </article> 
       
     </div>
      );
    }
   
}
export default Register;