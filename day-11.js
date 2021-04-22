// https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(s1, s2) {
  for (let item of s1) {
    if (!s2.has(item)) {
      return false;
    }
  }
  return true;
}

function notEqual(s1, s2) {
  for (let item of s1) {
    if (!s2.has(item)) {
      return true;
    }
  }
  return false;
}

// https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

function process2Arrays(arr1, arr2) {
  let amountOfEls = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) != -1) {
      amountOfEls++;
    }
  }
  for (let j = 0; j < arr2.length; j++) {}
  let amountOfArr1Els = arr1.length - amountOfEls;
  let amountOfArr2Els = arr2.length - amountOfEls;
  let numOfEl = amountOfArr1Els + amountOfArr2Els;
  let result = [amountOfEls, numOfEl, amountOfArr1Els, amountOfArr2Els];
  return result;
}
