import React, { useState } from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
 } from 'reactstrap';

export default function Search(){
  // constructor(props) {
  //   super(props);

  //   this.toggleDropDown = this.toggleDropDown.bind(this);
  //   this.toggleSplit = this.toggleSplit.bind(this);
  //   this.state = {
  //     dropdownOpen: false,
  //     splitButtonOpen: false
  //   };
  // }

  // toggleDropDown() {
  //   this.setState({
  //     dropdownOpen: !this.state.dropdownOpen
  //   });
  // }

  // toggleSplit() {
  //   this.setState({
  //     splitButtonOpen: !this.state.splitButtonOpen
  //   });
  // }

  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

    return (
      <div>
        <InputGroup>
          <InputGroupButtonDropdown addonType="prepend" toggle={() => setSplitButtonOpen(!splitButtonOpen)}>
            <Button outline>Split Button</Button>
            <DropdownToggle split outline />
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
          <Input placeholder="and..." />
          <InputGroupAddon addonType="append"><Button color="secondary">I'm a button</Button></InputGroupAddon>
        </InputGroup>
      </div>
    );
}