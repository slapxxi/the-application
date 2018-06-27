import * as _ from 'lodash';
import styled from 'react-emotion';

const Heading = styled('h1')`
  font-family: Roboto Slab, serif;
  font-size: 34px;
  line-height: 1.1764;
  color: ${(p) => _.get(p, 'theme.colors.heading')};
`;

export default Heading;
