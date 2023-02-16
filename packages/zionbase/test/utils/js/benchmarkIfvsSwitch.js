function benchmark() {
  const numberOfTests = 10_000_000;
  const results = [];
  let startTime;
  let endTime;
  startTime = Date.now();
  for (let i = 0; i < numberOfTests; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      // do nothing
    } else if (i % 3 === 0) {
      // do nothing
    } else if (i % 5 === 0) {
      // do nothing
    }
  }
  endTime = Date.now();
  results.push({
    test: "if statement - scenario 1",
    time: endTime - startTime,
  });

  startTime = Date.now();
  for (let i = 0; i < numberOfTests; i++) {
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        // do nothing
        break;
      case i % 3 === 0:
        // do nothing
        break;
      case i % 5 === 0:
        // do nothing
        break;
    }
  }
  endTime = Date.now();
  results.push({
    test: "switch statement - scenario 1",
    time: endTime - startTime,
  });

  startTime = Date.now();
  for (let i = 0; i < numberOfTests; i++) {
    if (i < 25) {
      // do nothing
    } else if (i >= 25 && i < 50) {
      // do nothing
    } else if (i >= 50 && i < 75) {
      // do nothing
    } else if (i >= 75 && i < 100) {
      // do nothing
    } else {
      // do nothing
    }
  }
  endTime = Date.now();
  results.push({
    test: "if statement - scenario 2",
    time: endTime - startTime,
  });

  startTime = Date.now();
  for (let i = 0; i < numberOfTests; i++) {
    switch (true) {
      case i < 25:
        // do nothing
        break;
      case i >= 25 && i < 50:
        // do nothing
        break;
      case i >= 50 && i < 75:
        // do nothing
        break;
      case i >= 75 && i < 100:
        // do nothing
        break;
      default:
        // do nothing
        break;
    }
  }
  endTime = Date.now();
  results.push({
    test: "switch statement - scenario 2",
    time: endTime - startTime,
  });
  const prime_tests = numberOfTests / 333.33333;
  startTime = Date.now();
  for (let i = 0; i < prime_tests; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      // do something
    }
  }
  endTime = Date.now();
  results.push({
    test: "if statement - scenario 3",
    time: endTime - startTime,
  });

  startTime = Date.now();
  for (let i = 0; i < prime_tests; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      let case_ = i % j === 0;
      switch (true) {
        case case_:
          isPrime = false;
          break;
      }
    }
  }
  endTime = Date.now();
  results.push({
    test: "switch statement - scenario 3",
    time: endTime - startTime,
  });
  return results;
}

let tests = 10;
let results = [];

for (let i = 0; i < tests; i++) {
  const start = performance.now();
  let result = benchmark();
  results.push(result);
  const end = performance.now();
  process.stdout.write(
    `done in ${end - start} millisecs\n`
  );
}

function calculateAverage(results) {
  const tests = results.length;
  const map = new Map();
  let counter = 0;
  results.map(e => {
    counter++;
    e.forEach(e => {
      let time = map.get(e.test);
      if (!time) {
        map.set(e.test, e.time);
      } else {
        time = time + e.time;
        map.set(e.test, time);
      }
      // console.log(counter, tests);
      if (counter === tests) {
        const average = time / tests;
        time = average;
        map.set(e.test, time);
      }
    });
  });
  return map;
}
const average = calculateAverage(results);
console.table(average);
