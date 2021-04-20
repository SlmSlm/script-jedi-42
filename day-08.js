// http://www.codewars.com/kata/5722fd3ab7162a3a4500031f

function whatNumberIsIt(n) {
  if (n > Number.MAX_VALUE) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (n < Number.MIN_VALUE) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (isNaN(n)) {
    return "Input number is Number.NaN";
  }
  return "Input number is " + n;
}

// https://www.codewars.com/kata/57238ceaef9008adc7000603

function colorOf(r, g, b) {
  function check(col) {
    if (col.length < 2) {
      result += col.padStart(2, "0");
    } else {
      result += col.toString(16);
    }
  }
  let result = "#";
  check(r.toString(16));
  check(g.toString(16));
  check(b.toString(16));
  return result;
}

// http://www.codewars.com/kata/57256064856584bc47000611

function howManySmaller(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toFixed(2) < n) {
      count++;
    }
  }
  return count;
}
