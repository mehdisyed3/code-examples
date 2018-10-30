/*
Convert the given number into a roman numeral.

convertToRoman(12)                // "XII".
convertToRoman(16)                // "XVI".
convertToRoman(29)                // "XXIX".
convertToRoman(44)                // "XLIV".
convertToRoman(45)                // "XLV"
convertToRoman(68)                // "LXVIII"
convertToRoman(83)                // "LXXXIII"
convertToRoman(1000)                //  "M"
convertToRoman(1004)                // "MIV"
convertToRoman(1006)                // "MVI"
convertToRoman(1023)                // "MXXIII"
convertToRoman(2014)                // "MMXIV"
*/

function convertToRoman(num) {

  let roman = ['M', 'CM', 'D', 'CD', 'C', 'X', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']; // array with roman val

  let numb = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1] // array with numerical val
  let final = "";

  //iterate for a length of numb array
  for (var i = 0; i <= numb.length; i++) {

    //while original number is larger than inputted numb array
    while (num >= numb[i]) {

      //add its equivalnt 
      final += roman[i]
      num -= numb[i];
    }
  }
}