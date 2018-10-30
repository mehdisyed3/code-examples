/*
Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first input array. 

var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3]));			// [5, 10, 15, 88, 1, 7, 100]
*/

function union() {
  let array = [...arguments].flat(2); // flattening arguments to have all elements in one Array
  let newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (!newArr.includes(array[i])) { // if newArr doesnt already have item
      newArr.push(array[i]); // pushing it to newArr
    }
  }

  return newArr;
}