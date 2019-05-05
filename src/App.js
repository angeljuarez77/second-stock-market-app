import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import Search from './components/Search';

function App() {
  const [view, setView] = useState("welcome");

  function getView(){
    switch (view) {
      case 'welcome':
      return <Welcome />
      case 'search': 
        return (
          <Search />
        )
      default:
      return (
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