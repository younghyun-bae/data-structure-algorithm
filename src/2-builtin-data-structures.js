let instructor = {
  firstName: "Younghyun",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4]
}


// to use objects
// when you don't need oreder
// when you need fast access / insertion and removal

// Big O of Objects
// Insertion - O(1), Removal - O(1), Searching - O(n), Access - O(1)
// When you don't need any ordering objects are an excellent choice!

// Big O of Object Methods
// Object.keys - O(n)
// Object.values - O(n)
// Object.entries - O(n)
// hasOwnProperty - O(1)

console.log(Object.keys(instructor)); // ['firstName', 'inInstructor', 'favoriteNumbers']
console.log(Object.entries(instructor)); // [Array(2), Array(2), Array(2)]

console.log(instructor.hasOwnProperty("firstName")); // true

// Objects are usually quick and faster than arrays


let names = ["Machael", "Melissa", "Andrea"];
let values = [true, {}, [], 2, "awesome"];

// Arrays, Ordered lists
// to use arrays
// when you need order
// when you need fast access / insertion and removal (srot of...)d

// Big O of Arrays
// Insertion - It depends... at the beginning O(n)
// Push() and Pop() faster than Shift() and Unshift() except for the empty arrays
// because it has to reindex every items
// Removal - It depends... also at the beginning O(n)
// Seraching - O(n), Access - O(1)

// Big O of Array Operations
// push(), pop() - O(1) / shift(), unshift(), concat(), slice(), splice() - O(n) / sort() - O(n * logN)
// forEach(), map(), filter(), reduce() etc. - O(n)