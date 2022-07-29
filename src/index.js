import * as fs from 'node:fs';
import path from 'path';
import _ from 'lodash';

const getExtension = (filepath) => path.extname(filepath);
const normalizePath = (filepath) => path.resolve(filepath);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const isEqual = (value1, value2) => value1 === value2;

export default (fpath1, fpath2) => {
  const ext1 = getExtension(fpath1);
  const ext2 = getExtension(fpath2);

  if (ext1 !== ext2) return console.log('Extensions of files does not matches');

  const parsedFile1 = JSON.parse(readFile(normalizePath(fpath1)));
  const parsedFile2 = JSON.parse(readFile(normalizePath(fpath2)));

  const keys = _.union(Object.keys(parsedFile1), Object.keys(parsedFile2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys
    .map((key) => {
      const value1 = parsedFile1[key];
      const value2 = parsedFile2[key];

      if (key in parsedFile1 && key in parsedFile2) {
        if (isEqual(value1, value2)) return `    ${key}: ${value1}`;

        return `  - ${key}: ${value1}` + '\n' + `  + ${key}: ${value2}`;
      }

      if (key in parsedFile1) return `  - ${key}: ${value1}`;

      if (key in parsedFile2) return `  + ${key}: ${value2}`;
    })
    .join('\n')
    .trim();

  const newResult = `{\n  ${result}\n}`;
  console.log(newResult);

  return newResult;
};
