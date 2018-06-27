import * as _ from 'lodash';
import styled from 'react-emotion';

const Text = styled('p')`
  text-overflow: ellipsis;
  font-size: 15px;
  line-height: 1.6;
  color: ${(p) => _.get(p, 'theme.colors.text')};
`;

export default Text;
