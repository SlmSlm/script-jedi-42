// http://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function shuffleIt(arr, ...change) {
  for (let i = 0; i < change.length; i++) {
    const [a, b] = [change[i][0], change[i][1]];
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  return arr;
}

// https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50/

function loopArr(arr, direction, steps) {
  for (let i = 0; i < steps; i++) {
    if (direction === "right") {
      arr.unshift(arr[arr.length - 1]);
      arr.pop(arr[arr.length - 1]);
    } else {
      arr.push(arr[0]);
      arr.shift();
    }
  }
  return arr;
}

// http://www.codewars.com/kata/572af273a3af3836660014a1

function infiniteLoop(arr, d, n) {
  let i = 0;
  if (d === "right") {
    while (i <= n) {
      if (i === 0) {
        arr[i].unshift(arr[arr.length - 1].pop([arr[i].length - 1]));
      }
      arr[i + 1].unshift(arr[i][arr[i].length - 1]);
      arr[i].pop();
      i++;
    }
  } else {
    while (i <= n) {
      if (i === 0) {
        arr[arr[i].length - 1].push(arr[i].shift());
      }else if (i === n){
        console.log(arr);
        return arr;
      }
      arr[i].push(arr[i + 1].shift());
      i++;
    }
  }
  console.log(arr);
  return arr;
}
