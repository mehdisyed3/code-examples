/*
Return true if the given string is a palindrome. Otherwise, return false.

palindrome("eye");								// true
palindrome("_eye") 								// true.
palindrome("race car") 							// true.
palindrome("not a palindrome") 					// false.
palindrome("A man, a plan, a canal. Panama") 	// true.
palindrome("never odd or even") 				// true.
palindrome("nope") 								// false.
palindrome("almostomla") 						// false.
palindrome("My age is 0, 0 si ega ym.") 		// true.
*/

function palindrome(str) {
  //comparing original string with reversed string
  if (str.replace(/[\W_]/g, '').toLowerCase() ===
         str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join("")){
  return true;
}
  return false;
}



