import React, { useState } from 'react';
import { InputGroup, InputGroupAddon, InputGroupButtonDropdown, Input, Button, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Search(props){
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

    return (
      <div className="search-component">
        <h1>Search for your company.</h1>
        <InputGroup>
          <Input 
          id="search-form" 
          placeholder="Company Symbol" 
          onChange={() => props.formInput()}
          />
          <InputGroupButtonDropdown addonType="prepend" isOpen={splitButtonOpen} toggle={() => setSplitButtonOpen(!splitButtonOpen)}>
            <Button outline>{props.chosenTimeRange}</Button> 
            <DropdownToggle split outline />
            <DropdownMenu>
              <DropdownItem onClick={() => props.changeTimeRange("1d")}>1 Day</DropdownItem>
              <DropdownItem onClick={() => props.changeTimeRange("1m")}>1 Month</DropdownItem>
              <DropdownItem onClick={() => props.changeTimeRange("3m")}>3 Months</DropdownItem>
              <DropdownItem onClick={() => props.changeTimeRange("6m")}>6 Months</DropdownItem>
              <DropdownItem onClick={() => props.changeTimeRange("1y")}>1 Year</DropdownItem>
              <DropdownItem onClick={() => props.changeTimeRange("2y")}>2 Year</DropdownItem>
              <DropdownItem onClick={() => props.changeTimeRange("5y")}>5 Year</DropdownItem>
              {/* <DropdownItem divider /> */}
              <DropdownItem onClick={() => props.changeTimeRange("YTD")}>YTD</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <InputGroupAddon addonType="append">
              <Button 
              onClick={
                () => {
                  // props.formSubmit();
                  props.changeView("stock");
                }
              } 
              color="secondary">Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
}

export default Search;