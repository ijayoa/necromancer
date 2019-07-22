import React from 'react';
import logo from './logo.svg';
import './App.css';
import VarnishingText from './VarnishingText';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Now
        </a>
      </header>
      <div className="App-content">
        <VarnishingText text = "A handy assistant makes a happy magician." />
      </div>
    </div>
    
  );
}

export default App;
