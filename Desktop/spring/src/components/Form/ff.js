import React ,{Component}from 'react';
import './Form.css';

class Form extends Component {
constructor({userId}){
  super();
    
   this.state = {
    auth: true ,
     userId:userId,
     FormTitle : "",
    FormAuthor :"",
    FormPages :"",
    FormStatus :"start Later",
    FormImageUrl : "",
    FormDescription : "",
    FormError:{
    FormTitle : "",
    FormAuthor :"",
    FormPages :"",
    FormStatus :"",
    FormImageUrl : "",
    FormDescription : ""
    }
        }
}

onTitleChange=(event)=>{
      this.setState({ FormTitle:event.target.value.replace(/[^A-Za-z]/ig, '')});
     
      
  }
 onAuthorChange=(event)=>{
      this.setState({FormAuthor:event.target.value});
     
  }

 onPagesChange=(event)=>{
   this.setState({FormPages:event.target.value});
  
      
  }
  onStatusChange=(event)=>{
      this.setState({FormStatus:event.target.value});
     
  }
onImageUrlSelect=(event)=>{
      this.setState({FormImageUrl:event.target.value});
    
  }
  onDescriptionChange=(event)=>{
      this.setState({FormDescription:event.target.value});
     
  }
 
  
onFormSubmit = (req,res) => {
 
  
/* const Book={
title : this.state.FormTitle,
author:this.state.FormAuthor,
pages :this.state.FormPages,
 status :this.state.FormStatus,
imageUrl : this.state.FormImageUrl,
description : this.state.FormDescription 
} */
fetch("http://localhost:3000/api/book",
{
method:"post",
headers:{"content-Type":"application/json"},
body:JSON.stringify({
title : this.state.FormTitle,
userId:this.state.userId,
author:this.state.Author,
pages :this.state.FormPages,
status :this.state.FormStatus,
imageUrl : this.state.FormImageUrl,
description : this.state.FormDescription 
})
}).then(response=>response.status(201).json(response))
.then(book=>{  
      this.props.loadLibrary(book);
      console.log(book);
   
} )
.catch(err =>res.status(400).json('unable to submit form'));
 

}

render(){ 
    return(
        <div className="main">
        <h3 className="center">Add a new book to your library</h3>
          <div className="form-container " id="bookForm">
      <form encType="multipart/form-data">
        <div className="row">
          <div className="col-25">
            <label htmlFor="title">Book Title</label>
          </div>
          <div className="col-75">
          <label className="db fw6 lh-copy f6 FormError"  htmlFor="FormError">{this.state.FormError.FormTitle}</label>
            <input type="text" id="title"  onChange={this.onTitleChange.bind(this)} name="title" placeholder="Book title.."/>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="author">Author(s)</label>
          </div>
          <div className="col-75">
            <input type="text" id="author" onChange={this.onAuthorChange.bind(this)} name="author" placeholder="Book's author.."/>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="pages">Number Of Pages</label>
          </div>
          <div className="col-75">
            <input type="number" id="pages" onChange={this.onPagesChange.bind(this)} name="pages" placeholder="Book's pages.."/>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="author">Image url</label>
          </div>
          <div className="col-75">
            <input type="text" id="imageUrl"  onChange={this.onImageUrlSelect.bind(this)} name="imageUrl" placeholder="Book's image.."/>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="status">Reading Status</label>
          </div>
          <div className="col-75">
            <select id="status" onChange={this.onStatusChange.bind(this)} name="status">
              <option  onChange={this.onStatusChange.bind(this)} name="status" value="completed">Reading Completed</option>
              <option   onChange={this.onStatusChange.bind(this)} name="status" value="In Progress">Reading In Progress</option>
              <option   onChange={this.onStatusChange.bind(this)}name="status" value="start Later">Start Later</option>
               <option  onChange={this.onStatusChange.bind(this)} name="status" value="start Now">Start Now</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="description">Description</label>
          </div>
          <div className="col-75">
        <textarea id="description" onChange={this.onDescriptionChange.bind(this)} name="description" placeholder="Write a little description of the book.." style={{height:200}}></textarea> 
          </div>
        </div>
        <div className="row">
        <input className="b ph3 pv2  ba b--black grow pointer f6 dib btn" onClick={this.onFormSubmit.bind(this)} type="submit" id ="submit" value="Add Book data-go-estimate"/>
        </div>
      </form>
    </div>
    </div>
      );
    }
  }
export default Form;