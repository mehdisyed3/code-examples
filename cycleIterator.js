/*
Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);

console.log(getDay()); 									//'Fri'
console.log(getDay()); 									//'Sat'
console.log(getDay()); 									//'Sun'
console.log(getDay()); 									//'Fri'
*/

function cycleIterator(array) {
  let index = -1; 											// setting index at -1

  return function () {
    if (index === array.length - 1) { 						// reset index if index = array.length - 1 
      index = -1;
    }
    index++ 												// else increment index
    return array[index]
  }
}

