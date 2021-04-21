// http://www.codewars.com/kata/5728203b7fc662a4c4000ef3

function alienLanguage(str) {
  let result = "";
  const lastI = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === " " || i === lastI) {
      result += str[i].toLowerCase();
    } else {
      result += str[i].toUpperCase();
    }
  }
  return result;
}

// 



//
