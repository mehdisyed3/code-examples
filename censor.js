/*
Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair)


const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');

console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // 'The slow, brown fox jumps over the lazy cats.'
*/

function censor() {
  let arr = []
  let final = "";
  return function (...args) {
    let arg = [...args];
    // if length of arguments = 2, push arguments to arr Array
    if (arg.length === 2) {
      arr.push(arg);
    }
	//if length of arguments = 1
    else { 
      if (arg.length === 1) {
        final =  arg[0]; 
        for (var i = 0; i < arr.length; i++) {   
	// replacing first item of arr in final string with second item	of arr	
          final= final.replace(arr[i][0], arr[i][1]);
        }
        return final 
      }        
    }     
  }
}
