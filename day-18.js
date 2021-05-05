// http://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(arr) {
  let res = [];
  let calculating = arr.reduce((prev, item, index) => {
    if (arr[index] <= 10 && arr[index + 1] <= 10) {
      res.push(arr[index] + arr[index + 1]);
    } else if (arr[index + 1] != undefined) {
      toString(arr[index], arr[index + 1]);

      function toString(a, b) {
        const str1 = a.toString();
        const str2 = b.toString();
        let result = Number(str1.substr(str1.length - 1)) + Number(str2[0]);
        res.push(result);
      }
    }
  }, 0);
  return res.reduce((prev, item) => {
    return prev * item;
  });
}

// http://www.codewars.com/kata/5732b0351eb838d03300101d
// Вже вирішив задачку та побачив в інших відповідях перевірку через indexOf, але мені здається логічнішим includes, тому лишив так

function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  } else if (arr.includes(5) && arr.includes(13)) {
    return "It's a black array";
  } else {
    return "It's a white array";
  }
}

// https://www.codewars.com/kata/5735956413c2054a680009ec

function rndCode() {
  let res = "";
  let words = "ABCDEFGHIJKLM";
  let symbols = "~!@#$%^&*";
  while (res.length < 2) {
    res += words[Math.floor(Math.random() * words.length)];
  }
  while (res.length < 6) {
    res += Math.floor(Math.random() * 10);
  }
  while (res.length < 8) {
    res += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return res;
}
