// http://www.codewars.com/kata/unpacking-arguments

function spread(func, args) {
return func(...args);
}

// http://www.codewars.com/kata/for-the-sake-of-argument

function numbers(...value) {
  for (let element of value) {
    const check = typeof element;
    if (check != "number") {
      return false;
    }
  }
  return true;
}
