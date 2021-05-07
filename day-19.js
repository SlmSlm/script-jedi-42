// http://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  let result = [];
  let i = 0;
  while (i < count.length) {
    let coincidence = animals.match(new RegExp(count[i], "g"));
    if (coincidence != null) {
      result.push(coincidence.length);
    } else {
      result.push(0);
    }
    i++;
  }
  return result;
}

// http://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(str, word) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length != word.length) {
      delete arr[i];
    }
  }
  let res = arr.filter(function (currentValue) {
    let item = currentValue.split("");
    if (
      item[0] === word.match(/^./g)[0] &&
      item[item.length - 1] === word.match(/.$/g)[0]
    ) {
      return currentValue;
    }
  });
  return res.join(" ");
}
