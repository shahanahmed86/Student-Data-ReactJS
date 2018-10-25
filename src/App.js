import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Student from './component/student';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Student />
      </div>
    );
  }
}

export default App;
