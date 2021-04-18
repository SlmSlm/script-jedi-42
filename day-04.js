// http://www.codewars.com/kata/57216d4bcdd71175d6000560

function padIt(str, n) {
  let paddedStr = str;
  let i = 0;
  while (i < n) {
    if (i % 2 === 0) {
      paddedStr = "*" + paddedStr;
    } else {
      paddedStr = paddedStr + "*";
    }
    i++;
  }
  return paddedStr;
}

// http://www.codewars.com/kata/5721a78c283129e416000999

function pickIt(arr) {
  const odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  return [odd, even];
}


// http://www.codewars.com/kata/5721c189cdd71194c1000b9b

function grabDoll(dolls) {
  const bag = [];
  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] != "Hello Kitty" && dolls[i] != "Barbie doll") continue;
    bag.push(dolls[i]);
    if (bag.length === 3) break;
  }
  return bag;
}

// http://www.codewars.com/kata/5722b3f0bd5583cf44001000

function giveMeFive(obj) {
  let arr = [];
  for (let key in obj) {
    if (key.length === 5 && obj[key].length === 5) {
      arr.push(key);
      arr.push(obj[key]);
    } else if (key.length === 5) {
      arr.push(key);
    } else if (obj[key].length === 5) {
      arr.push(obj[key]);
    }
  }
  return arr;
}
