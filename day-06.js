// https://www.codewars.com/kata/maximum-multiple/train/javascript

function maxMultiple(divisor, bound) {
  let arr = [];
  let n = divisor;
  while (n <= bound) {
    arr.push(n);
    n++;
  }
  for (let i = arr.length; i <= arr.length; i--) {
    if (arr[i] % divisor == 0) {
      return arr[i];
    }
  }
}

// tests passed, but there was bad optimization, so I thought more

function maxMultiple(divisor, bound){
  while (bound % divisor != 0){
    bound--;
  }
  return bound;
}

// https://www.codewars.com/kata/is-he-gonna-survive/train/javascript

function hero(bullets, dragons){
let num = bullets / dragons;
  if (num >= 2){
    return true;
  }else{
    return false;
  }
}

// https://www.codewars.com/kata/59441520102eaa25260000bf

function unusualFive() {
  let arr = ["a", "b", "c", "d", "e"];
  return arr.length;
}
