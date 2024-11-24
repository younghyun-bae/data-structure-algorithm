// JS has search! indexOf, includes, find, findIndex

//Linear Search - Best O(1) or Worst O(n), inefficient, iterating until finding the value
function linearSearch(arr, val) {
  for(var i =0; i < arr.length; i++) {
    if(arr[i] === val) {
      return 1;
    }
  }
  return -1;
}
linearSearch([34,56,1,2], 1) //2

//Binary Search, much faster! Best O(1) Worst O(log n), it's efficient when an array sorted out otherwise it's useless(go for linear instead)
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor(start + end) / 2
  while(arr[middle] !== elem && start <= end) {
    console.log(start, middle, end);
    if(elem < arr[middle]) {
      end = middle -1;
    } else {
      start = middle + 1;
    } middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem? middle : -1;
  // if(arr[middle] === elem) {
  //   return middle;
  // }
  // return -1;
}
binarySearch([2,5,6,9,13,15,28,30], 15)

//Naive Solution - finding the same Substrings
function naiveSearch(long, short) {
  var count = 0;
  for(var i = 0; i < long.length; i++) {
    for(var j = 0; j < short.length; j++) {
      if(short[j] !== long[i+j]) break;
      if(j === short.length - 1) count++;
    }
  }
  return count;
}
naiveSearch("lorie loled", "lo")