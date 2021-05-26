// https://www.codewars.com/kata/array-number-reduce/train/javascript

Array.prototype.reduce = function (process, initial) {
  for (let element of this) {
    if (initial === undefined) {
      initial = element;
      continue;
    }
    initial = process(initial, element);
  }
  return initial;
};

// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056

Object.deepFreeze = function (object) {
  Object.freeze(object);
  for (let key in object) Object.deepFreeze(object[key]);
};
