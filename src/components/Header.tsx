import { get } from 'lodash';
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../design-system/index';

function Header() {
  return (
    <Container>
      <Logo to="/" theme={theme}>
        Ré
      </Logo>
      <NavLink to="/login" href="/login" theme={theme}>
        Login &nbsp; →
      </NavLink>{' '}
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  vertical-align: middle;
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(p) => get(p, 'theme.colors.text')};
`;

const Logo = styled(Link)`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  color: ${(p) => get(p, 'theme.colors.button')};
`;

export default Header;
