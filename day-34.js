// https://www.codewars.com/kata/basic-subclasses-adam-and-eve/

class God{
  static create(){
    return [new Man(), new Woman()];
  }
}
function Human(name){
  this.name=name
}

function Man(){
  Human.call(this);
}
Man.prototype = Object.create(Human.prototype)

function Woman(){
  Human.call(this);
}
Woman.prototype = Object.create(Human.prototype)

// https://www.codewars.com/kata/56ff9b53140fcca90b000530/

class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}

//https://www.codewars.com/kata/55a144eff5124e546400005a

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.info = this.name + "s age is " + this.age;
  }
}
