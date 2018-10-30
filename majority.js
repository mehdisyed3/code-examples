/*
Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.


var isOdd = function(num) { return num % 2 === 1; };

console.log(majority([1, 2, 3, 4, 5], isOdd)); 		// true
console.log(majority([2, 3, 4, 5], isOdd)); 			// false
*/

function majority(array, callback) {
  
  let length = array.length;
  let half = length / 2;
  let arr = array.filter(function (item) {			// filtering each item using callback 
    return callback(item)
  });

  if (arr.length > half) {							// if  length of filtered array is more than half the length of original array
    return true 									// majority of elements are true
  }
  else {
    return false									// majority of elements are false
  }
}
  