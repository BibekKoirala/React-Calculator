import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator';
import './Components/StyleSheet/Calculator.css'

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" height="100" width="100" />
      <Calculator />
      
    </div>
  );
}

export default App;
