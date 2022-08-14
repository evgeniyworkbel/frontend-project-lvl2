import makePlain from './plain.js';
import makeStylish from './stylish.js';

export default (data, format) => {
  let output;
  switch (format) {
    case 'stylish':
      output = makeStylish(data);
      break;
    case 'plain':
      output = makePlain(data);
      break;
    default:
      console.log(`Given format '${format}' doesn't support`);
  }

  return output;
};
