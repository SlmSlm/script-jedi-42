// http://www.codewars.com/kata/572cb264362806af46000793

function threeInOne(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 3) {
    result.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
    return result;
}

// http://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  const resArr = Array.from(arr);
  resArr.sort((a, b) => {
    const n = arr.filter((x) => x === a).length;
    const m = arr.filter((y) => y === b).length;
    if (n === m) {
      return b - a;
    } else {
      return n - m;
    }
  });
  return resArr;
}

// http://www.codewars.com/kata/572fdeb4380bb703fc00002c

function isolateIt(arr) {
  const answer = arr.map(filtrArr);
  function filtrArr(str) {
    const strArr = str.split('');
    if (strArr.length % 2 != 0) {
      strArr[Math.floor((strArr.length)/2)] = '|';
    } else {
      strArr[strArr.length/2-1] = strArr[strArr.length/2-1] + '|';
    }
    return strArr.join('');
  }
  return answer;
}
