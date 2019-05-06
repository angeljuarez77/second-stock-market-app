import React from 'react';
import StockHeading from './StockHeading';

function Stock(props) {
  return (
    <div className="stock-component">
      <StockHeading 
      info={props.info}
      logo={props.logo}
      />
    </div>
  )
};

export default Stock;