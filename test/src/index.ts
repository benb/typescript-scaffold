import testedModule from '../../';
import temp = require('temp');
import { test } from 'ava';
import * as path from 'path';
import * as fse from 'fs-extra-promise';
temp.track();

test(async (t) => {
  t.truthy(testedModule(), "No tests, but otherwise fine");
});

