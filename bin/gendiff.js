#!/usr/bin/env node
import { program } from 'commander';
import genDiff from '../src/index.js';

program
  .version('')
  .description('Compares two configuration files and shows a difference.')

 program
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action(genDiff)

program
  .option('-f, --format <type>', 'output format')

program
  .parse(process.argv)


