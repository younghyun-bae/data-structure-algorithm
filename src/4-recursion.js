/* What is recursion? A process (a function in our case) that calls itself */
//ex. JSON.parse / JSON.stringify / document.getElementById / DOM traversal algorithms / Object traversal
//Very common with more complex algorithms, It's sometimes a cleaner alternative to iteration

//The call stack
/* It's a stack data structure, Any time a function is invoked it is placed(pushed) on the top of the call stack. When JS sees the return keyword or when the function ends, the compiler will remove (pop) */

// Check Call Stack on dev tool "sources"
function takeShower() {
  return "Showering!"
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");  
}

wakeUp();


/* How recursive functions work? Invoke the same function with a different input until you reach your base case! */

//Two essential parts of a recursive function! 1. Base Case 3. Different Input

//Base Case
/* The condition when the recursion ends. This is the most important concept to understand */

function countDown (num) {
  if(num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

function sumRange(n) {
  if(n === 1) return 1;
  return n + sumRange(n-1);
}

sumRange(4);

//Factorial! 4! = 4*3*2*1

//with for statement
function factorial(num) {
  let total = 1;
  for(let i = num; i > 1; i--) {
    total *= i
  }
  return total;
}

factorial(4);

//with recursion
function factorial2(num) {
  if (num === 1) return 1; //★
  return num * factorial2(num-1);
}

// Where things go wrong
/* No base case, Forgetting to return or returning the wrong thing! Stack overflow! */

// Helper Method Recursion

function collectOddsValues(arr) {
  let result = [];
  function helper(helperInput) {
    if(helperInput.length === 0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr);
  return result;
}

collectOddsValues([1,2,3,4,5,6,7,8,9]);

// Pure Recursion

function collectOddsValues2(arr) {
  let newArr = [];
  if(arr.length === 0) {
    return newArr;
  }
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddsValues2(arr.slice(1)));
  return newArr;
}

// More tips for pur recrsion
/* For arrays, use methods like slice,the spread operator, and concat that make copies of arrays so you do not mutate them. Remember that astrings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings. To make copies of objects use Object.assign, or the spread operator */