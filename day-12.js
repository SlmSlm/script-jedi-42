// https://www.codewars.com/kata/59859f435f5d18ede7000050

function wordToBin(str) {
  const arr = [];
  const words = str.split("");
  for (let i = 0; i < words.length; i++) {
    arr.push(0 + words[i].charCodeAt(0).toString(2));
  }
  return arr;
}

// https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x) {
  const words = x.split("");
  let total1 = "";
  let total2 = "";
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < words.length; i++) {
    total1 += words[i].charCodeAt();
    total2 += words[i].charCodeAt();
  }
  for (let i = 0; i < total1.length; i++) {
    sum1 += Number(total1[i]);
    sum2 += Number(total1[i].replace(7, 1));
  }
  return sum1 - sum2;
}
