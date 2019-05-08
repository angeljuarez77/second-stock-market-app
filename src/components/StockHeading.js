import React from 'react';

function StockHeading(props) {
  return (
    <div className="stock-heading">
      <img alt={`a logo of the `} className="company-logo" src={props.logo} />
    </div>
  )
};

export default StockHeading;