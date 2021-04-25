// https://www.codewars.com/kata/56c2a067585d9ac8280003c9/

function match(candidate, job) {
  for (key in candidate) {
    for (let c of candidate[key]) {
      for (key in job) {
        for (let j of job[key]) {
          for (let i of j.substitutions) {
            if (c.preference != "avoid" || c.name != j.name) {
              console.log(c.name);
              console.log(c.experience);
              console.log(j.name);
              console.log(j.idealYears);
              console.log(j.substitutions[0]);
              if (c.preference === "desired") {
                c.experience += c.experience / 2;
                console.log(c.experience);
                if (c.experience >= j.idealYears && i.name.includes(c.name) ||
                c.name === j.name){
                  console.log("desired true");
                  return true;
                }
              } else if (c.experience >= j.idealYears && i.name.includes(c.name) ||
              c.name === j.name) {
                console.log("true");
                return true;
              }
            }
          }
        }
      }
    }
  }
  console.log(false);
  return false;
}
