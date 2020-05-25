import React,{Component} from 'react';
import './Form.css';
//import { isAuthenticated } from '../../repository';
class Form extends Component{
    constructor(props){
        super(props);
        this.state={
        auth: true ,
        title : "",
        author :"",
        pages :"",
        status :"start Later",
        imageUrl : "",
        description : "",
        Error:{ }
    }
    this.handleInputChange= this.handleInputChange.bind(this);
    this.onFormSubmit= this.onFormSubmit.bind(this);
 }

       handleInputChange(event) {
 this.setState({[event.target.name]: event.target.value})
 }
    onFormSubmit=(req,res)=>{
   
}
    render(){

        return(
          
            
            <div className=" form mt0 br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-100-l  shadow-5 ">
             <h3 className="center">Add a new book to your library</h3> 
          <form encType="multipart/form-data">
            <div className="row">
              <div className="col-25 ">
                <label htmlFor="title">Book Title</label>
              </div>
              <div className="col-75 ">
                <input type="text" id="title"  onChange={this.onhandleInputChange} name="title" placeholder="Book title.."/>
              </div>
            </div>
            <div className="row">
              <div className="col-25 ">
                <label htmlFor="author">Author(s)</label>
              </div>
              <div className="col-75">
                <input type="text" id="author" onChange={this.onhandleInputChange} name="author" placeholder="Book's author.."/>
              </div>
            </div>
            <div className="row">
              <div className="col-25 ">
                <label htmlFor="pages">Number Of Pages</label>
              </div>
              <div className="col-75">
                <input type="number" id="pages" onChange={this.onhandleInputChange} name="pages" placeholder="Book's pages.."/>
              </div>
            </div>
            <div className="row">
              <div className="col-25 ">
                <label htmlFor="author">Image url</label>
              </div>
              <div className="col-75">
                <input type="text" id="imageUrl"  onChange={this.onhandleInputChange} name="imageUrl" placeholder="Book's image.."/>
              </div>
            </div>
            <div className="row">
              <div className="col-25 ">
                <label htmlFor="status">Reading Status</label>
              </div>
              <div className="col-75 ">
                <select className="pa2  w-100" id="status" onChange={this.onStatusChange} name="status">
                  <option  onChange={this.onhandleInputChange} name="status" value="completed">Reading Completed</option>
                  <option   onChange={this.onhandleInputChange} name="status" value="In Progress">Reading In Progress</option>
                  <option   onChange={this.onhandleInputChange}name="status" value="start Later">Start Later</option>
                   <option  onChange={this.onhandleInputChange} name="status" value="start Now">Start Now</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-25 ">
                <label htmlFor="description">Description</label>
              </div>
              <div className="col-75 ">
            <textarea className="pa2  w-100 " id="description" onChange={this.onhandleInputChange} name="description" placeholder="Write a little description of the book.." style={{height:200}}></textarea> 
              </div>
            </div>
            <div className="row">
            <input className=" btn ph3 pv2 input-reset  ba  w-70 grow pointer f4 b dib" onClick={this.onFormSubmit} type="submit" id ="submit" value="Add Book "/>
            </div>
          </form>
        </div>
       
       
      );
    }
   
}
export default Form;