/*
Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned


function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}

var nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); 					// { odd: 3, even: 2 }
*/


function countBy(arr, callback) {
														// counter for even and odd set to 0
  let evens = 0; 
  let odds = 0;
  let obj = {};

  for (var i = 0; i < arr.length; i++) {				// looping through each item of Array

    if (callback(arr[i]) === "even") { 					// if callback return even, adding count by 1
      evens++;
    }
    else if (callback(arr[i]) === "odd") {				// if callback return odd, adding count by 1
      odds++
    }
														// setting key and value
    obj.even = evens;
    obj.odd = odds;  

  }
  return obj
}