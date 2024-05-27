// Algorithms and Problem Solving Patterns! important!ß
// Algorithm is? A provess or set of steps to accomplish a certain task. the foundation for being a successful problem solving and developer
// How to improve?
// 1. Devise a plan for solving problems 
// 2. Master common problem solving patterns


// Problem solving strategies

// Understand the Problem
// 1. Can I restate the problem in my own words?
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be dtermined from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem.)
// 5. How should I label the important pieces of data that are a part of the problem?

// Write a function which takes two numbers and returns their sum

// Explore Concrete Examples
// User stories to Unit test
// 1. Start with Simple Examples
// 2. Progress to More Complex Examples
// 3. Explore Examples with Empty Inputs
// 4. Explore Examples with Invalid Inputs

// Write a function which takes in a string and returns counts of each character in the string

// charCount("aaaa") // {a:4}
// charCount("hello") // {h:1, e:1, l:2, o:1}

// "my phone number is 0163..." // ?
// charCount(null) // ?

// Break It Down
// Explicitly write out the steps you need to take.
// This forces you to think about hte code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details(eg. language syntax) as well.

const charCount1 = (str) => {
  //make object to return at end
  let result = {};
  //loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
      //if the char is a num/letter AND is a key in object, add one count
    if(result[char] > 0) {
      result[char]++;
    } //if the char is a num/letter AND not in object, add it to object and set value to 1
    else {
      result[char] = 1;
    };
  }
    //if the char is something else (space, period, etc.) don't do anything
  //return object at the end
  return result;
}

// Solve / Simplify the problem
// 1. Find the core difficulty in what you're trying to do
// 2. Temporarily ignore that difficulty
// 3. Write a simplified solution
// 4. Then incorporate that difficulty back in

console.log(charCount1("hello"));
console.log(charCount1("Hi there!"));
// Just ignore the very detaied things instead of blocking from the very beginning, start writing down something on comment etc. what I can figure out step by step, Also can consider more further cases to be occured

// Look back and Refactor 
// Refactoring Questions
// Can you check the result? derive the result differently? understand it at a glance? use the result or method for some other problem? improve the performance of your solution? think of other ways to refactor? How have other people solved this problem?

const charCount2 = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      };
    }
  }
  return obj;
}

// In an attempt to refactor...

const isAlphaNumeric = (char) => {
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && //numeric (0-9)
      !(code > 64 && code < 91) && //upper alpha (A-Z)
      !(code > 96 && code < 123)) {
        return false;
      }
      return true;
}

const charCount3 = (str) => {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}
console.log(charCount3("Hello, I am Younghyun >3<!"));


// Problem Solving Patterns
// Frequency Counter
// Multiple Pointers
// Sliding Window
// Divide and Conquer
// Dynamic Programming
// Greedy Algorithms
// Backtracking

// Frequenct Counters
// this pattern uses objects or sts to collect values/frequencies of values
// can often avoid the need for nested loops or O(n^2) operations with arrays / strings

// Write a function called same, which accepts two arrays. the function should return true if every value in the array has it's corresponding value squared in teh second array. the frequency of values must be the same.

// A naive solution
// Time Complexity - n^2
const same1 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true;
}

same1([1, 2, 3], [4, 1, 9]) //true
same1([1, 2, 3], [1, 9]) // false
same1([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

//Refactored
// worse
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if(!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  return true
}

console.log(same2([1, 2, 3, 2], [9, 1, 4, 4]));
console.log(same2([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]));

// Anagrams
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//my answer

const myAnagram = (s1, s2) => {
  if (s1.length !== s2.length) {
    return false;
  }
  const sortedS1 = s1.split('').sort().join('');
  const sortedS2 = s2.split('').sort().join('');

  return sortedS1 === sortedS2;
}

console.log(myAnagram('anagram', 'nagaram'));
console.log(myAnagram('bae', 'bba'));

// solution
const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false
  }
  const lookup = {};
  for(let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(validAnagram('', '')); //true
validAnagram('aaz', 'zza') //false
console.log(validAnagram('anagram', 'nagaram')); //true
validAnagram('rat', 'car') // false

// Multiple Pointers
// Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition
// very efficient for solving problems with minimal space complexity as well

// An Example
// Write a function called sumZero which accepts a sorted array of intergers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Naive solution
// Time complexity - o(n^2) / Space complexity - O(1)

const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

console.log(sumZero([-3, -2, -1, 0 ,1, 2, 3])); // [-3, 3]
sumZero([-2, 0 ,1, 3]); // undefined
sumZero([1, 2, 3]); // undefined

// Refactor
// Time complexity - O(n) / Space Complexity - O(1)
const sumZero2 = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
console.log(sumZero2([-2, 0 ,1, 3]));

// countUniqueValues
/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. */

const countUniqueValues = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = i; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
    console.log(i, j);
    return i + 1;
  }
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]));

// Sliding Window
/* This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string etc. */

/* Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n censecutive elements in the array. */

// A naive solution
// time complexity - O(n^2)
const maxSubarraySum = (arr, num) => {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i ++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Refactor
// Time complexity - O(n)

const maxSubarraySum2 = (arr, num) => {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));