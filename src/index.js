import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';
import formatOutput from './formatters/index.js';

const getExtension = (filepath) => path.extname(filepath);
const getAbsolutePath = (filepath) => path.resolve(filepath);
const readFileSync = (filepath) => fs.readFileSync(filepath, 'utf-8');
const initTree = (name, status, children = [], oldValue = '', freshValue = '') => ({
  name,
  status,
  children,
  oldValue,
  freshValue,
});

export default (fpath1, fpath2, formatName = 'stylish') => {
  const ext1 = getExtension(fpath1);
  const ext2 = getExtension(fpath2);

  const parsedFile1 = parse(readFileSync(getAbsolutePath(fpath1)), ext1);
  const parsedFile2 = parse(readFileSync(getAbsolutePath(fpath2)), ext2);

  const buildASTtree = (obj1, obj2) => {
    const sortedKeys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

    const packedTree = sortedKeys.map((key) => {
      const value1 = obj1[key];
      const value2 = obj2[key];

      const node = initTree(key, '', [], value1, value2);

      if (key in obj1 && key in obj2) {
        if (_.isObject(value1) && _.isObject(value2)) {
          node.status = 'unchanged';
          node.children = buildASTtree(value1, value2);
          // Reset oldValue and freshValue for convenient debugging (only in this case)
          node.oldValue = '';
          node.freshValue = '';
        } else if (value1 === value2) {
          node.status = 'unchanged';
        } else {
          node.status = 'updated';
        }
        return node;
      }

      if (key in obj1) {
        node.status = 'removed';
      }

      if (key in obj2) {
        node.status = 'added';
      }

      return node;
    });

    return packedTree;
  };

  const ASTtree = buildASTtree(parsedFile1, parsedFile2);
  return formatOutput(ASTtree, formatName);
};
