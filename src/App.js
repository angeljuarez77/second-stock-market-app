import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import Search from './components/Search';
import Stock from './components/Stock';
import { promised } from 'q';

const BASE_URL = "https://api.iextrading.com/1.0";
function App() {
  const [view, setView] = useState("welcome");
  const [timeRange, setTimeRange] = useState("Time Range");
  const [companySymbol, setCompanySymbol] = useState("");
  const [companyStock, setCompanyStock] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);

  function searchForm(){
    const form = document.getElementById("search-form");
    setCompanySymbol(form.value);
  }

  async function request(){
    const [chartRes, logoRes, infoRes] = await Promise.all([
      axios.get(`${BASE_URL}/stock/${companySymbol}/chart/${timeRange}`),
      axios.get(`${BASE_URL}/stock/${companySymbol}/logo`),
      axios.get(`${BASE_URL}/stock/${companySymbol}/company`),
    ]);
    setCompanyStock(chartRes.data);
    setCompanyLogo(logoRes.data.url);
    setCompanyInfo(infoRes.data);
  }
  
  function getView(){
    switch (view) {
      case 'welcome':
        return <Welcome />
      case 'search': 
        return (
          <Search 
         // changeView={setView}
         // formSubmit={request}
         // formInput={searchForm} 
         // chosenTimeRange={timeRange} 
         // changeTimeRange={setTimeRange}
          />
        )
      case 'stock':
          return (
            <Stock 
            logo={companyLogo}
            chart={companyStock}
            info={companyInfo}
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