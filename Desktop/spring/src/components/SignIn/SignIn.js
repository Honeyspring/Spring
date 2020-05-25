import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../repository';
import hive from '../icons/ive.ico';
import Footer from '../Footer/Footer';
 import './SignIn.css'
class SignIn extends Component {
    constructor(props){
        super( props);
          this.state={
           signInEmail:'',
           signInPassword:''
            
          }
this.handleInputChange =this.handleInputChange.bind(this);
 this.submitLogin =this.submitLogin.bind(this);
 }
 
 handleInputChange(event) {
 this.setState({[event.target.name]: event.target.value})
 }

submitLogin(event){
 event.preventDefault();
 login(this.state)
 .then(token => window.location = '/')
 .catch(err => alert(err));
 }
   
      
    render(){
       
    return(
            <div className="flex cover mt0 br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l  shadow-5 ">
              
        <article className="sign br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6  shadow-5  flex flex-column">
        <main className="pa4 black-80">  
        <div className="measure centre">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f3 fw6 ph0 mh0 center white">   Sign In</legend>
        <div className="mt3">
            <label className="db fw6 lh-copy f6"  htmlFor="email-address">Email</label>
            <input className="pa2 input-reset  bg-transparent hover-bg hover-white w-100" type="email" onChange={this.handleInputChange}  name="signInEmail"  id="email-address" required="required"/>
        </div>
        <div className="mv3">
            <label className="db fw6 lh-copy f6"  htmlFor="password">Password</label>
            <input className="pa2 input-reset  bg-transparent hover-bg hover-white w-100" type="password"  onChange={this.handleInputChange} name="signInPassword"  id="password" required="required"/>
        </div>
        
        </fieldset>
        <div className="">

        <input className="b ph3 pv2 input-reset br4 ba b-black bg-color bg-transparent w-100 grow pointer f6 dib" onClick={this.submitLogin}type="submit" value="Sign In"/>
       
        </div>
        <div className="lh-copy mt3">
        <p className=" flex">
        <i className="f5 white ">
        Don't have an Acccount?
        </i>
        <Link to="/Register" className="f5 link dim blac  " >Register</Link>
        </p>
        <a href="#0" className="f5 link dim blac "><i>Forgot your password?</i></a>
      
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
export default SignIn;