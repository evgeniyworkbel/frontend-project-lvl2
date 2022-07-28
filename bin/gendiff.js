#!/usr/bin/env node
import { program } from 'commander';

program
  .version('')
  .description('Compares two configuration files and shows a difference.')
  .argument('<filepath1>')
  .argument('<filepath2>')

program
  .option('-f, --format <type>', 'output format')

program
  .parse()