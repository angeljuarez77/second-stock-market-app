import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Stock from './components/Stock';

// const BASE_URL = "https://api.iextrading.com/1.0";
function App() {
  const [view, setView] = useState("welcome");
  const [timeRange, setTimeRange] = useState("Time Range");
  const [companySymbol, setCompanySymbol] = useState("");

  function searchForm(){
    const form = document.getElementById("search-form");
    setCompanySymbol(form.value);
  }

  
  function getView(){
    switch (view) {
      case 'welcome':
        return <Welcome />
      case 'search': 
        return (
          <Search 
          changeView={setView}
          formInput={searchForm} 
          chosenTimeRange={timeRange} 
          changeTimeRange={setTimeRange}
          />
        )
      case 'stock':
          return (
            <Stock 
            companySymbol={companySymbol}
            timeRange={timeRange}
            />
          )
      default:
        return <Welcome />
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