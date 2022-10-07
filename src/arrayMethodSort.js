'use strict';

/**
 * Implement method Sort
 */
const asString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = asString) {
    let count;

    do {
      count = 0;

      for (let index = 1; index < this.length; index++) {
        const previous = this[index - 1];
        const current = this[index];

        if (compareFunction(previous, current) > 0) {
          this[index - 1] = current;
          this[index] = previous;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
