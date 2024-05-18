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
addUpTo2(100000000); //addUpTo2 seems faster
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);

//The problem with time
//Different machines will record different times
//The same machine will record different times
//For fast algorithms, speed measurements may not be precise enough?

// Time Complexity

// An algorithm is O(f(n))
//if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
// linear f(n) = n, quadratic f(n) = n^2, constant f(n) = 1 etc.

const countUpAndDown1 = (n) => {
  console.log("Going up!");
  for (let i = 0; i < n; i++) {
    console.log(i);
  } // O(n)
  console.log("At the top!\nGoing down...");
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  } // O(n)
  console.log("Back down. Bye!");
}

const printAllParis = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    } // O(n)
  } // O(n)
} // O(n * n)

// Simplifying Big O Expressions
// Constants Don't Matter
// Smaller Terms Don't Matter

// Big O Shorthands
// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array (by index) or object (by key) is constant
// In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

const logAtLeast5 = (n) => {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}
console.log(logAtLeast5(10));
// Only positive numbers work

const logAtMost5 = (n) => {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}

// Space Complexity
// Analyzing the runtime of an algotithm as the size of the inputs increases
// How much additional memory do we need to allocate in oreder to run the code in our algorithm

// Rules of thumb in JS
// Most primitives (booleans, numbers, undefined, null) are constant space
// Stirings require O(n) space (where n is the string length)
// Reference types are generally O(n), where n is the length (for arrays) or the numver of keys(for objects)

const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}