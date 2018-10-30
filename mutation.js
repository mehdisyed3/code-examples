/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

mutation(["hello", "hey"])										// false.
mutation(["hello", "Hello"])									// true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])				// true.
mutation(["Mary", "Army"])										// true.
mutation(["Mary", "Aarmy"])										// true.
mutation(["Alien", "line"])										// true.
mutation(["floor", "for"])										// true.
mutation(["hello", "neo"])										// false.
*/


function mutation(arr) {
	// lower casing the arguments
  var word= arr[1].toLowerCase();
  var target= arr[0].toLowerCase();

  for (var i = 0; i < word.length; i++){
	// if any element of first string does not exist in the second string return false else return true
    if(target.indexOf(word[i]) === -1){
      return false;
    }
  }
  
  return true;
}
