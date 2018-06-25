// @flow
import React from 'react';
import { Heading, PassProps, Text } from '../components';
import { theme } from '../design-system';

function LoginPage() {
  return (
    <div>
      <PassProps theme={theme}>
        <Heading>Login</Heading>
        <Text>Sign in into your account.</Text>
      </PassProps>
    </div>
  );
}

export default LoginPage;
