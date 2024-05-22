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

