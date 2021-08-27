import React, { Component } from 'react';
import './App.css';
import fetch from 'cross-fetch';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    //Using fetch api techniques
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then(response => response.json())
    //   .then(data => console.log(data));

    //Using axios techniques

    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data)
      .then(data => console.log(data));

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