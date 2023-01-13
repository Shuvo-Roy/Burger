import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import "./Header.css";
import { GiHamburger } from "react-icons/gi";

const Header = () => {
  return (
    <div className="nav-menu">
      <Navbar className="navbar">
        <NavbarBrand href="/" className="mr-auto ml-md-5 logo"><GiHamburger size={40} className="logo-icon"/></NavbarBrand>
        <Nav className="mr-md-5 nav-items">
          <NavItem>
            <NavLink href="#" className="nav-link">Login/Sign In </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
