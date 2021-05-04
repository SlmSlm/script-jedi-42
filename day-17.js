//http://www.codewars.com/kata/573023c81add650b84000429

function countGrade(scores) {
  let res = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };
  let check = scores.filter(function (currentValue) {
    if (currentValue === 100) {
      res.S += 1;
    } else if (currentValue < 100 && currentValue >= 90) {
      res.A += 1;
    } else if (currentValue < 90 && currentValue >= 80) {
      res.B += 1;
    } else if (currentValue < 80 && currentValue >= 60) {
      res.C += 1;
    } else if (currentValue < 60 && currentValue >= 0) {
      res.D += 1;
    } else {
      res.X += 1;
    }
  });
  return res;
}

//http://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
  let res = [];
  arr.some((currentValue, i) => {
    let nextItem = arr[i + 1];
    if (i + 1 < arr.length) {
      if (currentValue === nextItem) {
        return res.push(currentValue, nextItem);
      } else if (
        currentValue.toString() ===
        nextItem.toString().split("").reverse().join("")
      ) {
        return res.push(currentValue, nextItem);
      }
    }
  });
  if (res.length === 0) {
    res.push(-1, -1);
    return res;
  } else {
    return res;
  }
}

//http://www.codewars.com/kata/5731861d05d14d6f50000626
// Через replaceAll не проходить тести, але працює 

function bigToSmall(arr) {
  let joinedArr = [].concat(...arr);
  function compare(a, b) {
    return b - a;
  }
  return joinedArr.sort(compare).toString().replaceAll(",", "<");
}

// Варіант для кодварс:

function bigToSmall(arr) {
  let joinedArr = []
    .concat(...arr)
    .sort(compare)
    .toString()
    .split("");
  function compare(a, b) {
    return b - a;
  }
  joinedArr.forEach(function (item, i) {
    if (item === ",") {
      joinedArr[i] = ">";
    }
  });
  return joinedArr.join("");
}

