// https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(bod, tail) {
  let sub = bod.substr(bod.length - tail.length);
  if (sub === tail) {
    return true;
  } else {
    return false;
  }
}

// https://www.codewars.com/kata/56f6ad906b88de513f000d96

function bonusTime(salary, bonus) {
  if (bonus == true) {
    return "\u00A3" + salary * 10;
  } else {
    return "\u00A3" + salary;
  }
}

//https://www.codewars.com/kata/5a58d889880385c2f40000aa

function automorphic(n) {
  let square = Math.pow(n, 2).toString();
  let num = n.toString();
  if (square.substring(square.length - num.length) == n) {
    return "Automorphic";
  } else {
    return "Not!!";
  }
}
