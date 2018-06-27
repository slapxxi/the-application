import * as React from 'react';
import { Heading, PassProps, Text } from '../components/index';
import { Theme } from '../context/index';

function LoginPage() {
  return (
    <Theme.Consumer>
      {(theme) => (
        <div>
          <PassProps theme={theme}>
            <Heading>Login</Heading>
            <Text>Sign in into your account.</Text>
          </PassProps>
        </div>
      )}
    </Theme.Consumer>
  );
}

export default LoginPage;
