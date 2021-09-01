import React, { Component } from 'react';
import './App.css';
//import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    //Using fetch api techniques
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    //Using axios techniques

    // axios.get('http://localhost:3001/dishes')
    //   .then(response => response.data)
    //   .then(data => console.log(data));

    //Error Handle
    // axios.get('http://localhost:3000/dishes')
    // .then(response=>response.data)
    // .then(data=>console.log(data))
    // .catch(error=>console.log(error.message));


    //Submitted Data to Server
  //   axios.post('http://localhost:3000/dishes',{
      
  //     "name": "Sankar Sarker",
  //     "age": "25"
  // }
  //   )
  //   .then(response=>response.data)
  //   .then(data=>console.log(data))

  //Edit the Information

  // axios.put('http://localhost:3000/dishes/5',{name:"Pranto Sarker",age:"25"})
  // .then(response=>response.data)
  // .then(data=>console.log(data))

  //Delete the
    
    



  }
  render() {
    return (
      <div>
      <h1>Using REST API from ReactApp</h1> 
      <p>Check it out in console </p>
      </div>
    );
  }
}

export default App;