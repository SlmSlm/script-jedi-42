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

// http://www.codewars.com/kata/57284d23e81185ae6200162a

function topSecret(str) {
  const words = str.split("");
  let res = "";
  for (let i = 0; i < str.length; i++) {
    let decryption = str[i].charCodeAt() - 3;
    if (str[i].charCodeAt() === 32 || str[i].charCodeAt() === 33) {
      res += String.fromCharCode(str[i].charCodeAt());
    } else if (str[i].charCodeAt() === 98) {
      res += String.fromCharCode(121);
    } else if (str[i].charCodeAt() === 97) {
      res += String.fromCharCode(120);
    } else {
      res += String.fromCharCode(decryption);
    }
  }
  return res.toString();
}

// хардкодінг наше все :)

// http://www.codewars.com/kata/5729b103dd8bac11a900119e

function fiveLine(s) {
  let words = "";
  for (let i = 0; i <= 5; i++) {
    words += `${s.trim().repeat(i)}\n`;
  }
  return words.trim();
}
