import React,{Component} from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import { useAuth } from '../../context/auth';
// import './SignIn.css'
class SignIn extends Component {
    constructor(props){
        super( props);
          this.state={
           signInEmail:'',
           signInPassword:'',
            isLoggedIn:false,
            isError:"",
            
          }
        
    }
     
    onEmailChange=(event)=>{
        this.setState({signInEmail:event.target.value});
        
    }
    onPasswordChange=(event)=>{
        this.setState({signInPassword:event.target.value});
        
    }
    onSubmitSignIn=(req,res)=>{
      
   fetch("http://localhost:3000/api/auth/login",
     {
     method:"post",
     headers:{"content-Type":"application/json",
    "Authorization":"Bearer" + authTokens},
     body:JSON.stringify({
         email:this.state.signInEmail,
         password:this.state.signInPassword
                     })
      })
     .then(response=>response.json())
     .then(result=>{
        if (result.status === 200) {
            const {setAuthTokens}=useAuth();
            setAuthTokens(result.data);
            console.log(result);
            //this.setState({authTokens:result.data});
            this.setState({isLoggedIn:true});
          } else {
            this.setState({isError:"Unauthorized Access"});
          }
        
         
     }).catch(error=> {
        this.setState({isError:"Unauthorized Access"});
        res.status(401).json("unauthorized user")
     });
        }

       
      
    render(){
        const {isLoggedIn}=this.state;
        if (isLoggedIn) {
            return <Redirect to="/" />;
          }
    return(

        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">  
        <div className="measure centre">
        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
        <div className="mt3">
            <label className="db fw6 lh-copy f6"  htmlFor="email-address">Email</label>
            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" onChange={this.onEmailChange}  name="email-address"  id="email-address" required="required"/>
        </div>
        <div className="mv3">
            <label className="db fw6 lh-copy f6"  htmlFor="password">Password</label>
            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"  onChange={this.onPasswordChange} name="password"  id="password" required="required"/>
        </div>
        
        </fieldset>
        <div className="">
        <p className="f6">{isError}</p>
        <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onSubmitSignIn}type="submit" value="Sign In"/>
        </div>
        <div className="lh-copy mt3">
        <p className="f6">Don't have an Acccount?</p>
        <Link to="/Register" className="f6 link dim black db" >Register</Link>
        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
        </div>
            </div>
            </main>
     </article> 
      );
    }
}
export default SignIn;