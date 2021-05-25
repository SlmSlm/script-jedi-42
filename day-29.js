// https://www.codewars.com/kata/how-new-works

const myObj = Object.create(MyObject.prototype);
MyObject.bind(myObj)();

// http://www.codewars.com/kata/replicate-new

function nouveau (Constructor, ...args) {
  return Reflect.construct(Constructor, args);
}
