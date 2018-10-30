/*
Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. 

var arr1 = [5, 10, 15, 20];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [1, 10, 15, 5, 20];

console.log(intersection([arr1, arr2, arr3]));  //[5, 15]
*/

function intersection([arr1, arr2, arr3]) {
  let arr = arr1;
  let array = [...arguments].flat();
  let final = [];

  for (let i = 0; i < arr.length; i++) {

    let num = arr[i];
    let result = array.every(function(item) { // running includes method to all the subarrays 
      return item.includes(num)
    })
    if (result) { // if true then pushing element to final array
      final.push(num);
    }
  }
  return final;
}