import * as s from 'shelljs';
const config = require('./tsconfig.json');
const outDir = config.compilerOptions.outDir;
const environment = process.env.ENV || 'production'

s.rm('-rf', outDir);
s.mkdir(outDir);
s.cp(`${environment}.env`, `${outDir}/.env`);