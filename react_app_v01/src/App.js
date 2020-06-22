import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyComponent(props){
  console.log(props);
return <h1>my Testing props {props.testing}</h1>;
}


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
          Learn React
        </a>
        <MyComponent testing="TTTT"></MyComponent>
      </header>
      
    </div>
  );
}

export default App;
