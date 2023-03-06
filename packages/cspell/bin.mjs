#!/usr/bin/env node
import { program } from 'commander';

import * as app from './dist/esm/app.mjs';

app.run(program, process.argv).catch((e) => {
    if (!(e instanceof program.CommanderError) && !(e instanceof app.CheckFailed)) {
        console.log(e);
        // It is possible an explicit exit code was set, use it if it was.
        process.exitCode = process.exitCode || 1;
    }
    if (e instanceof app.CheckFailed) {
        process.exitCode = e.exitCode;
    }
});
