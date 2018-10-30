/*Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

var decimals = [1.3, 2.1, 2.4,2.9,7.1,7.3];
var floored = function(num) { return Math.floor(num); };

console.log(groupBy(decimals, floored)); 	// { 1: [1.3], 2: [2.1, 2.4] }
*/

function groupBy(arr, callback) {
  let obj = {}
for (let x of arr){							// using for of loop
    let num = callback(x);
    if(obj[num]=== undefined){				//if key is undefined create empty array
      obj[num] = [];
    }
    obj[num].push(x)						//push value to array set to key.

  }
  return obj 
}