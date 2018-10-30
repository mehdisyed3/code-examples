/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.The range will be an array of two numbers that will not necessarily be in numerical order.

smallestCommons([1, 5]) 					// 60.
smallestCommons([5, 1])						// 60
smallestCommons([2, 10])					// 2520.
smallestCommons([1, 13])					// 360360.
smallestCommons([23, 18])					// 6056820.
*/

function smallestCommons(arr) {
  arr.sort((a,b) => a - b);					// sorting arr
    let ini = arr[0];
    let at= arr[1]
    let range=[];

    for (var i = ini; i <= arr[1]; i++ ){ 	// using for loop to get a range of # from arr[0]to arr[1]
      range.push(i);
    }
    
    let lcm = at * at; 						// geting a num starting from arr[1](squared)
      
    while (									//while lcm % every item !== 0
      !range.every(function(item){
        return lcm % item  === 0
      })
    ){
		
      lcm += at;                           //add lcm with at
    }

    return lcm;
  }