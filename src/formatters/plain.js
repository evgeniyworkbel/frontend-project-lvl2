import _ from 'lodash';

const buildEnding = (status, previousValue, newValue) => {
  // Define function for printing value in different ways
  const prepareValue = (value) => {
    if (_.isObject(value)) return '[complex value]';
    if (typeof value === 'string') return `'${value}'`;

    return value;
  };

  const preparedPreviousValue = prepareValue(previousValue);
  const preparedNewValue = prepareValue(newValue);

  let ending = '';
  switch (status) {
    case 'updated':
      ending = `${status}. From ${preparedPreviousValue} to ${preparedNewValue}`;
      break;
    case 'added':
      ending = `${status} with value: ${preparedNewValue}`;
      break;
    case 'removed':
    default:
      ending = `${status}`;
  }

  return ending;
};

const plain = (coll) => {
  const iter = (currentNode, currentChain) => {
    const lines = currentNode
      .filter((node) => {
        const { status, children } = node;
        if (status === 'unchanged' && _.isEmpty(children)) {
          return false;
        }

        return true;
      })
      .flatMap((node) => {
        const {
          name, status, children, oldValue, freshValue,
        } = node;

        const chain = (currentChain === '') ? name : currentChain.concat('.', name);

        if (!_.isEmpty(children)) {
          return iter(children, chain);
        }

        const phraseEnding = buildEnding(status, oldValue, freshValue);
        return `Property '${chain}' was ${phraseEnding}`;
      })
      .join('\n');

    return lines;
  };

  return iter(coll, '');
};

export default plain;
