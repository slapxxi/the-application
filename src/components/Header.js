// @flow
import React from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';
import { theme } from '../design-system';

function Header() {
  return (
    <Container>
      <Logo to="/">Ré</Logo>
      <NavLink to="/login" href="/login">
        Login &nbsp; →
      </NavLink>{' '}
    </Container>
  );
}

const Container = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.text};
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: ${theme.colors.button};
`;

export default Header;
