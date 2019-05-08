import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StockHeading from './StockHeading';

const BASE_URL = "https://api.iextrading.com/1.0";
function Stock(props) {
  const [loading, setLoading] = useState(true);
  const [companyStock, setCompanyStock] = useState(null);
  const [companyLogo, setCompanyLogo] = useState(null);
  const [companyInfo, setCompanyInfo] = useState(null);

  async function request(){
    const chartRes = await axios.get(`${BASE_URL}/stock/${props.companySymbol}/chart/${props.timeRange}`);
    const logoRes = await  axios.get(`${BASE_URL}/stock/${props.companySymbol}/logo`);
    const infoRes = await axios.get(`${BASE_URL}/stock/${props.companySymbol}/company`);
    setCompanyStock(chartRes.data);
    setCompanyLogo(logoRes.data.url);
    setCompanyInfo(infoRes.data);
  }

  useEffect(() => {
    request();
  }, {});

  return (
    <div className="stock-component">
      <StockHeading 
      info={companyInfo}
      logo={companyLogo}
      />
    </div>
  )
};

export default Stock;