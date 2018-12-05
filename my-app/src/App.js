import React, { Component } from 'react';
import logo from './book.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          	Das war nun mein erster Commit.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
  
          </a>
        </header>
      </div>
    );
  }
}

export default App;
