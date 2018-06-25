// @flow
import React from 'react';
import { Button, Heading, PassProps, Text } from '../components';
import { theme } from '../design-system';

function HomePage() {
  return (
    <div>
      <PassProps theme={theme}>
        <Heading>Manage Tasks</Heading>
        <Text>There are no tasks yet.</Text>
        <Button>Manage Tasks</Button>
      </PassProps>
    </div>
  );
}

export default HomePage;
