import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation /> 
      <header className="App-header">
        <Welcome />
      </header>
    </div>
  );
}

export default App;
