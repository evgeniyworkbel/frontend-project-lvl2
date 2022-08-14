import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

// Tests for stylish output format
test('genDiff (json-json)', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'))).toEqual(readFile('expectedStylish.txt'));
});

// According to off. docs YAML can take as .yml as .yaml extensions
test('genDiff (yml-yaml)', () => {
  expect(genDiff(getFixturePath('file3.yml'), getFixturePath('file4.yaml'))).toEqual(readFile('expectedStylish.txt'));
});

test('genDiff (json-yaml)', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file4.yaml'))).toEqual(readFile('expectedStylish.txt'));
});

test('genDiff (json-yml)', () => {
  expect(genDiff(getFixturePath('file3.yml'), getFixturePath('file2.json'))).toEqual(readFile('expectedStylish.txt'));
});

// Tests for plain output format
test('genDiff (json-json)', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file2.json'), 'plain')).toEqual(readFile('expectedPlain.txt'));
});

test('genDiff (yml-yaml)', () => {
  expect(genDiff(getFixturePath('file3.yml'), getFixturePath('file4.yaml'), 'plain')).toEqual(readFile('expectedPlain.txt'));
});

test('genDiff (json-yaml)', () => {
  expect(genDiff(getFixturePath('file1.json'), getFixturePath('file4.yaml'), 'plain')).toEqual(readFile('expectedPlain.txt'));
});

test('genDiff (json-yml)', () => {
  expect(genDiff(getFixturePath('file3.yml'), getFixturePath('file2.json'), 'plain')).toEqual(readFile('expectedPlain.txt'));
});
