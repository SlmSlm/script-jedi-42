// http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(obj) {
  return (
    "function" ===
    typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney)
  );
}

// http://www.codewars.com/kata/cylon-evolution

function Cylon(model) {
  this.model = model;
  this.attack = function () {
    return "Destroy all humans!";
  };
}
function HumanSkin(model) {
  this.model = model;
  this.infiltrate = function () {
    return "Infiltrate the colonies";
  };
}
HumanSkin.prototype = new Cylon("raider");

// https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

const Router = function () {
  const routes = new Map();

  this.bind = function (route, method, callback) {
    if (routes.has(route)) {
      let methods = routes.get(route);
      methods.set(method, callback);
    } else {
      routes.set(route, new Map([[method, callback]]));
    }
  };

  this.runRequest = function (route, method) {
    if (!routes.has(route)) return "Error 404: Not Found";
    const methods = routes.get(route);
    if (!methods.has(method)) return "Error 404: Not Found";
    return methods.get(method).call(null);
  };
};
