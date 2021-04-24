// https://www.codewars.com/kata/56c22c5ae8b139416c00175d/

function match(candidate, job) {
  let minSal = 0;
  let maxSal = 0;
  for (key in candidate) {
    minSal = candidate[key] - candidate[key] / 10;
    for (key in job) {
      maxSal = job[key];
    }
  }

  if (maxSal === 0 || minSal === 0) {
    throw new Error();
  } else if (minSal > maxSal) {
    return false;
  } else if (minSal <= maxSal) {
    return true;
  }
}

// https://www.codewars.com/kata/56c2578be8b139bd5c001bd8

function match(job, candidates) {
  let filtered1 = [];
  for (let i of candidates) {
    if (i.desiresEquity === false || job.equityMax > 0) {
      for (let j of job.locations) {
        if (
          i.currentLocation === j ||
          i.desiredLocations.includes(j)
        ) {
          filtered1.push(i);
          console.log(filtered1.length);
        }
      }
    }
  }
  console.log(filtered1.length);
  return filtered1.length;
}
