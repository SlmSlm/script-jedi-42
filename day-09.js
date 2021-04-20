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
