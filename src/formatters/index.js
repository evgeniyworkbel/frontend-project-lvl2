import makePlain from './plain.js';
import makeStylish from './stylish.js';
import makeJSON from './json.js';

export default (data, format) => {
  let output;
  switch (format) {
    case 'stylish':
      output = makeStylish(data);
      break;
    case 'plain':
      output = makePlain(data);
      break;
    case 'json':
      output = makeJSON(data);
      break;
    default:
      throw new Error(`Given format '${format}' doesn't support`);
  }

  return output;
};
