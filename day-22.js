// https://www.codewars.com/kata/559f860f8c0d6c7784000119/train/javascript

function anyArrows(arrows) {
  if (arrows.length === 0) {
    return false;
  } else {
    let count = 0;
    for (let i = 0; i < arrows.length; i++) {
      if (arrows[i].damaged === false) {
        continue;
      } else if (arrows[i].damaged === true) {
        count++;
      }
    }
    if (count < arrows.length) {
      return true;
    } else {
      return false;
    }
  }
}

// https://www.codewars.com/kata/586909e4c66d18dd1800009b/train/javascript

let multiplyAll = (arr) => (n) =>
  arr.map(function (currentValue) {
    return currentValue * n;
  });
