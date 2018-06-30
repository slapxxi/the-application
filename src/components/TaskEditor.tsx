import * as React from 'react';
import styled from 'styled-components';
import { Button, Text } from '../components';
import { Plus } from '../icons';
import { Theme } from '../context';

class TaskEditor extends React.Component<{}, {}> {
  public render() {
    return (
      <Theme.Consumer>
        {(theme) => (
          <Container>
            <Text theme={theme}>There are no tasks yet.</Text>
            <Button theme={theme}>
              <Plus size={10} />
            </Button>
          </Container>
        )}
      </Theme.Consumer>
    );
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;

  & > p {
    flex: 1;
    margin-right: 1em;
  }
`;

export default TaskEditor;
