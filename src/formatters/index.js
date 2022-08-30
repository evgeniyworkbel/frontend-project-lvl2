import makePlain from './plain.js';
import makeStylish from './stylish.js';
import makeJSON from './json.js';

export default (data, format) => {
  switch (format) {
    case 'stylish':
      return makeStylish(data);
    case 'plain':
      return makePlain(data);
    case 'json':
      return makeJSON(data);
    default:
      throw new Error(`Given format '${format}' doesn't support`);
  }
};
