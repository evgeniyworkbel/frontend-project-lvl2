import _ from 'lodash';

const stringify = (value, currentDepth, replacer = ' ', spacesCount = 2) => {
  const iter = (currentValue, depth) => {
    if (!_.isObject(currentValue)) return `${currentValue}`;

    const indentSize = depth * spacesCount;
    const indent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => `${indent}  ${key}: ${iter(val, depth + 2)}`);

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(value, currentDepth + spacesCount);
};

export const stylish = (coll, replacer = ' ', spacesCount = 2) => {
  const iter = (currentNode, depth) => {
    const indentSize = depth * spacesCount;
    const commonIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);

    const lines = currentNode.map((node) => {
      const {
        name, status, children, oldValue, freshValue,
      } = node;

      const oldValueAsString = stringify(oldValue, depth);
      const freshValueAsString = stringify(freshValue, depth);

      if (children.length > 0) {
        return `${commonIndent}  ${name}: ${iter(children, depth + 2)}`;
      }

      if (status === 'modified') {
        return `${commonIndent}- ${name}: ${oldValueAsString}`
        + '\n'
        + `${commonIndent}+ ${name}: ${freshValueAsString}`;
      }

      if (status === 'added') {
        return `${commonIndent}+ ${name}: ${freshValueAsString}`;
      }
      if (status === 'deleted') {
        return `${commonIndent}- ${name}: ${oldValueAsString}`;
      }

      // If nothing changed
      return `${commonIndent}  ${name}: ${oldValueAsString}`;
    });

    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };

  return iter(coll, 1);
};

export default stylish;
