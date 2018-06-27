import * as React from 'react';
import styled from 'react-emotion';
import { Button, PassProps, Text } from '../components/index';
import { Arrow, Plus } from '../icons/index';
import { Theme } from '../context/index';

function HomePage() {
  return (
    <div>
      <Theme.Consumer>
        {(theme) => (
          <PassProps theme={theme}>
            <InputContainer>
              <PassProps theme={theme}>
                <Text>There are no tasks yet.</Text>
                <Button>
                  <Plus size={10} /> <Arrow size={10} />
                </Button>
              </PassProps>
            </InputContainer>
          </PassProps>
        )}
      </Theme.Consumer>
    </div>
  );
}

const InputContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${Text} {
    flex: 1;
    margin-right: 2px;
  }
`;

export default HomePage;
