import './App.css';
import React, { useState } from 'react';
import axios from 'axios';




function App() {
  const [Name, setName] = useState ("");
  const [Subject, setSubject] = useState (""); 
  const [Message, setMessage] = useState ("");
  const [Information, setInformation] = useState ([]);
  

  const addCRUD = () => {
    
    axios.post('http://localhost:3001/create',{
      Name: Name,
      Subject: Subject,
      Message: Message}).then(() => {
        setInformation([
          ...Information,
          {
            Name: Name,
            Subject: Subject,
            Message: Message,
          }
        ])
         })
  }

  const getCRUD = () => {
    axios.get('http://localhost:3001/DATA').then((response) => {
        setInformation(response.data)
         })
  }


  return (
    <div className="App">
      <div className="container">
      <form>
        <div className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
          <input onChange={(event)=> {
            setName(event.target.value);
          }} id="Name" type="text" className="form-control" name="Name" placeholder="Name"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon"><i className="glyphicon glyphicon-comment"></i></span>
          <input onChange={(event)=> {
            setSubject(event.target.value);
          }}id="Subject" type="subject" className="form-control" name="subject" placeholder="Subject"/>
        </div>
        <div className="input-group">
          <span className="input-group-addon">Message</span>
          <input onChange={(event)=> {
            setMessage(event.target.value);
          }}id="Message" type="text" className="form-control" name="Message" placeholder="Message"/>
        </div>
      
      </form>
      <div className="input-group"> 
          <input onClick={addCRUD}
          id="btn" type="button" className="btn btn-warning" name="btn" placeholder="Submit" value="Submit"/>
        </div>
      </div>
      
      <div className="input-group">
      <input onClick={getCRUD}
      id="btn" type="button" className="btn btn-primary" name="btn" placeholder="Show Data" value="show data"/>
      {Information.map((val,key) => {
        return (
          <div className="container testimonial"> 
          <p>{val.Name}</p>
          <h3>{val.Message}</h3> 
                    
          </div>
        )
      }
      )}
      </div>   

    </div>
  );
}

export default App;
