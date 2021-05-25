// https://www.codewars.com/kata/singleton-pattern/train/javascript

const Singleton = (() => {
  let instance;
  function init() {
    return instance || (instance = this);
  }
  return init;
})();
