import React from "react";
import { NavLink, } from "react-router-dom";
import { Menu, } from "semantic-ui-react";
import { AccountConsumer, } from "../providers/AccountProvider";

const Navbar = () => {

};

export default Navbar;
  <AccountConsumer>
    { account => (
      <Menu>
      <NavLink to="/">
        <Menu.Item>
          Home
        </Menu.Item>
      </NavLink>
      <NavLink to="/account/profile">
        <Menu.Item>
          { account.username }
        </Menu.Item>
      </NavLink>
      </Menu>
    )};
    
  </AccountConsumer>