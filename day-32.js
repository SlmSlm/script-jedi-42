// http://www.codewars.com/kata/this-is-a-problem

function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return this.name = this.firstName + ' ' + this.lastName;
}

// https://www.codewars.com/kata/this-is-an-other-problem

function NamedOne(first, last) {
  return {
    firstName: first,
    lastName: last,

    get fullName() {
      return this.firstName + " " + this.lastName;
    },

    set fullName(name) {
      let parts = name.split(" ");
      if (parts.length === 2) {
        this.firstName = parts[0];
        this.lastName = parts[1];
      }
    },
  };
}
