/* eslint import/no-extraneous-dependencies: [0] */
import * as emotion from 'emotion';
import { createSerializer } from 'jest-emotion';

expect.addSnapshotSerializer(createSerializer(emotion));
