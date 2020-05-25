import React,{Component} from "react";
import Header from '../components/Header/Header';
//import Footer from '../components/Footer/Footer';
import Table from '../components/Table/Table';
import Form from '../components/Form/Form';
import { getBooks, isAuthenticated } from '../repository';
const initialState={  
    user:{
      username:"",
      userId:"",
      email:"",
      password:"",
       
    },
    auth:true,
    book:{
     title : "",
    author :"",
    userId:"",
    pages :"",
    status :"",
   imageUrl : "",
    description : ""
    }
        }
    
  class Home extends Component{
    constructor(){
      super();
       this.state = initialState
  }
  componentDidMount() {
    if( isAuthenticated() )
    getBooks().then((books) => {
    this.setState({ books });
    }).catch(err => {
    alert('User Not Authenticated');
    this.setState({auth: false}
    )})
    else{
    alert('User Not Authenticated');
    this.setState({auth: false})
    }
  }
  loadUser=(data)=>{
    this.setState({user:
     { username:data.username,
      userId:data.userId,
      email:data.email,
      password:data.password
     }
    })
    }
  loadLibrary=(book)=>{
          this.setState({ book:{
            title: book.title,
            author:book.author,
            pages: book.pages,
            status:book.status,
            userId:this.state.user.userId,
            imageUrl: book.imageUrl,
            description: book.description,
          }
        });    
      }
     /*  onRouteChange=(route)=>{
        if(route=== 'SignIn'){
         this.setState({initialState})
        }else if(route=== 'home'){
         this.setState({IsLoggedIn: true})
        }
        this.setState({route:route});
      }
      */
    render(){ 
       const {user}=this.state
  return (
  <div>
      <Header username={user.username}/>

  <div className="main">
     <Table  Book={this.state.book} />
     <Form loadLibrary={this.loadLibrary.bind(this)}  userId={user.userId}/>
      </div>
     <div className="foot"></div>

   </div>
   

   );
}
 }
export default Home;