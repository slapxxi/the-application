import * as React from 'react';
import { Heading, Text } from '../components';
import { Theme } from '../context';

function LoginPage() {
  return (
    <Theme.Consumer>
      {(theme) => (
        <div>
          <Heading theme={theme}>Login</Heading>
          <Text theme={theme}>Sign in into your account.</Text>
        </div>
      )}
    </Theme.Consumer>
  );
}

export default LoginPage;
