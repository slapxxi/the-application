/* eslint import/no-extraneous-dependencies: [0] */
import 'react-testing-library/cleanup-after-each';
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));
