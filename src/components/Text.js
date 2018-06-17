// @flow
import _ from 'lodash';
import styled from 'react-emotion';

const Text = styled('p')`
  max-width: 45em;
  text-overflow: ellipsis;
  font-size: 15px;
  line-height: 1.6;
  color: ${(p) => _.get(p, 'theme.colors.text')};
`;

export default Text;
