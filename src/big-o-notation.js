// Calculate the sum of all numbers from 1 up to (and including) some number n.

const addUpTo1 = (n) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
};
console.log(addUpTo1(6)); //21

const addUpTo2 = (n) => {
  return n * (n + 1) / 2;
}
console.log(addUpTo2(6)); //21

//What does better mean?
//Faster? Less memory-intensive? More readable?

let t1 = performance.now();
addUpTo1(100000000); //addUpTo2 seems faster
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//The problem with time
//Different machines will record different times
//The same machine will record different times
//For fast algorithms, speed measurements may not be precise enough?
