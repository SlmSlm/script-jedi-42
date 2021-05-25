// http://www.codewars.com/kata/power-bind

Function.prototype.bind = function (ctx) {
  if (this.original) {
    return this.original.bind(ctx);
  } else {
    const original = this;
    function bound() {
      return original.apply(ctx, arguments);
    }
    bound.original = original;
    return bound;
  }
};

// https://www.codewars.com/kata/sort-with-arrow-functions

const OrderPeople = function (people) {
  return people.sort((a, b) => a.age - b.age); 
};
