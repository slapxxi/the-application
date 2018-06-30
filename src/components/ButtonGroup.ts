import styled from 'styled-components';
import Button from './Button';

const ButtonGroup = styled.div`
  ${Button} {
    border-radius: 0;
    margin: 0;
  }

  ${Button}:first-child {
    border-radius: 4px 0 0 4px;
  }

  ${Button}:last-child {
    border-radius: 0 4px 4px 0;
  }
`;

export default ButtonGroup;
