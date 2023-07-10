import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  background-color: #f2f2f2;
  padding: 16px;
`;

const NavItem = styled.a`
  color: #333;
  font-weight: bold;
  margin-right: 16px;
  text-decoration: none;

  &:hover {
    color: #ff0000;
  }
`;

const NavigationBar = () => {
  return (
    <Navbar>
      <NavItem href="#">Home</NavItem>
      <NavItem href="#">About</NavItem>
      <NavItem href="#">Services</NavItem>
      <NavItem href="#">Contact</NavItem>
    </Navbar>
  );
};

export default NavigationBar;
