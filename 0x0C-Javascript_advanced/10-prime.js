const countPrimeNumbers = () => {
  let count = 0;
  for (let i = 2; i <= 100; ++i) {
    let primeNumber = true;
    for (let j = 2; j <= 100; ++j) {
      if (i % j === 0 && i !== j) {
        primeNumber = false;
        break;
      }
    }
    if (primeNumber) {
      count++;
    }
  }
  return count;
};

const t0 = performance.now();
for (let i = 0; i < 100; ++i) {
  countPrimeNumbers();
}
const t1 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
