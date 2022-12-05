import get from 'lodash/get.js';

import Daskalo from './a.js';
import printSections from './b.js';

printSections(
  get(Daskalo, 'courses[0]')
);