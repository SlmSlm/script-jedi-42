// http://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr) {
  const newArr = [];
  let sorting = [...arr].sort(function (a, b) {
    return a.length - b.length;
  });
  let minLength = sorting[0].length;
  for (let i = 0; i < arr.length; i++) {
    arr[i].slice(0, minLength);
    newArr.push(arr[i].slice(0, minLength));
  }
  return newArr;
}

// http://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str, c) {
  const firstPos = str.indexOf(c);
  const lastPos = str.lastIndexOf(c);
  if (firstPos === -1) {
    return -1;
  }
  return lastPos - firstPos;
}

// http://www.codewars.com/kata/57280481e8118511f7000ffa

const words = string.split(" ");
console.log(words);
for (let i = 0; i < words.length; i++) {
  if (words[i] != " ") {
    words[i] = words[i].split("").join(separator);
  }
  console.log(words);
}
return words.join(" ");
