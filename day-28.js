// http://www.codewars.com/kata/a-function-within-a-function

function always(n) {
  return function () {
    return n;
  };
}

// https://www.codewars.com/kata/59bdbe9d46038724ca0000b9/train/javascript

function solution(arr, options) {
  let newArray = [];
  for (let i = 0; i < arr.length; ++i) {
    newArray.push(arr[i] + 2 * options.modifier);
  }
  return newArray;
}
