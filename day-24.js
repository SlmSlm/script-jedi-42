// http://www.codewars.com/kata/duplicate-arguments

function solution(...arr) {
  const check = Array.from(new Set(arr));
  if (check.length != arr.length) {
    return true;
  }
  return false;
}

// http://www.codewars.com/kata/last

function last() {
  const lastItem = arguments[arguments.length - 1];
  if (!lastItem[lastItem.length - 1]) {
    return lastItem;
  } else {
    return lastItem[lastItem.length - 1];
  }
}
