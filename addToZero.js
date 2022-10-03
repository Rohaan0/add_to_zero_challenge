// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.


// Starting array
let array = [-30, -43, -12, 30, 43, 0, 12]

addedArray = [1, 2, 3, 4]

flag = 0
// Write your solution below:
for (i = 0; i < array.length; i++){
  for(j = i + 1;j < array.length; j++){
    if (array[i] + array[j] === 0){
      console.log(true)
    }else{
      console.log(false)
    }
    }
  }
  

// for (i = 0; i < addedArray.length; i++){
//   for(j = i + 1;j < addedArray.length; j++){
//     if (addedArray[i] + addedArray[j] === 0){
//       console.log(true) 
//     }
//   }
//   }
