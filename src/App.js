import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';

function App() {
  const [view, setView] = useState("welcome");

  function getView(){
    switch (view) {
      case 'welcome':
      return <Welcome />
      case 'search': 
        return(
          <h1>shit shit</h1>
        )
      default:
      return(
        <Welcome />
      )
    }
  }
  return (
    <div className="App">
      <Navigation changeView={setView}/> 
      <header className="App-header">
        { getView() }
      </header>
    </div>
  );
}

export default App;
