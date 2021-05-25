// http://www.codewars.com/kata/write-javascripts-call-function-using-apply

Function.prototype.call = function(par, ...arguments) {
  return this.apply(par, arguments);
}

// http://www.codewars.com/kata/anonymous-returns

const name = "The Window";
const alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    const this_ = this;
    return function () {
      return this_.name;
    };
  },
};
