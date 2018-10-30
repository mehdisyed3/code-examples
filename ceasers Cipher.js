/*
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") 								// FREE CODE CAMP
rot13("SERR CVMMN!") 									// FREE PIZZA!
rot13("SERR YBIR?") 									// FREE LOVE?
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") // THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
*/

function rot13(str) {
  var alph = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var word = str.split("");						// string to Array
  var final = [];

  for (var i = 0; i < word.length; i++) { 		// iterating througj each element of word
    
	var cIndex = alph.indexOf(word[i]);			// current index of current item in alph arr
    
	var fIndex = cIndex + 13;					// finding final index that has to be replacd by adding13
    
	var diff = alph.length - cIndex;
   
   var reIndex = 13 - diff; 					// use this if cIndex is > than 12

    //this basecase will allow all other character to be pushed w/o any change
	if (cIndex === -1) {
      final.push(word[i])	this basecase will allow all other character                               to be pushed w/o any change
    }
    
    if (cIndex <= 12 && cIndex >= 0) { 
      final.push(alph[fIndex])
    }
	
    if (cIndex > 12) {
      final.push(alph[reIndex])
    }

  }
  return final.join("")
}