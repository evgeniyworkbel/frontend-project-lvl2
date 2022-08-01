import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';

const getExtension = (filepath) => path.extname(filepath);
const getAbsolutePath = (filepath) => path.resolve(filepath);
const readFileSync = (filepath) => fs.readFileSync(filepath, 'utf-8');

export default (fpath1, fpath2) => {
  const ext1 = getExtension(fpath1);
  const ext2 = getExtension(fpath2);

  const parsedFile1 = parse(readFileSync(getAbsolutePath(fpath1)), ext1);
  const parsedFile2 = parse(readFileSync(getAbsolutePath(fpath2)), ext2);

  const keys = _.union(Object.keys(parsedFile1), Object.keys(parsedFile2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys
    .map((key) => {
      const value1 = parsedFile1[key];
      const value2 = parsedFile2[key];

      if (key in parsedFile1 && key in parsedFile2) {
        if (value1 === value2) return `    ${key}: ${value1}`;

        return `  - ${key}: ${value1}\n  + ${key}: ${value2}`;
      }

      if (key in parsedFile1) return `  - ${key}: ${value1}`;

      return `  + ${key}: ${value2}`;
    })
    .join('\n')
    .trim();

  const newResult = `{\n  ${result}\n}`;
  console.log(newResult);

  return newResult;
};
