// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(bod, tail) {
  let sub = bod.substr(bod.length - tail.length);
  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}
