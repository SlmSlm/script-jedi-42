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


//


//
