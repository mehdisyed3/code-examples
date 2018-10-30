/*
Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come afterward.

function startsWithS(str) { return str[0].toLowerCase() === 's'; }

var tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']

console.log(prioritize(tvShows, startsWithS)); //  ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
*/

function prioritize(arr, callback){
  
  let first = []; 								// var for all strings beginning with "S"
  let sec 	= []; 								// var for all other srtrings
  
  for (var i = 0 ; i < arr.length; i++){
    if(callback(arr[i])){
      first.push(arr[i]) 						// if callback is true push, to first
    }
    else{
      sec.push(arr[i])							// if callback is false, push to sec
    }
  }
  
  return first.concat(sec); 					// returning concatenated Array. 
}