#!/usr/bin/env node

import assert from 'assert';
import { run } from './dist/esm/index.mjs';

async function main() {
    assert(typeof run === 'function');
    assert(run('one'));
    console.log('done.');
}

main();
