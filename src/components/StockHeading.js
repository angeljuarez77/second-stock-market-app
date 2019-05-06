import React from 'react';

function StockHeading(props) {
  // console.log(props.info.companyName)
  return (
    <div className="stock-heading">
      <img alt={`a logo of the `} className="company-logo" src={props.logo} />
    </div>
  )
};

export default StockHeading;