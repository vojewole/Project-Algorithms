let reverseArray = (array) => {
  let length = array.length;
  let placeHolder;
  for (i = 0; i < length - length / 2; i++) {
    placeHolder = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = placeHolder;
  }
  return array;
};

//console.log(reverseArray([8, 7, 6, 5, 4, 3, 2, 1]));

let rotateArray = (array, shiftBy) => {
  placeHolder1 = array[0];
  placeHolder2 = array[array.length - 1]
  
  for (i = 0; i < shiftBy; i++) {

    array[0]= placeHolder2;
    array[array.length - 1] = array[array.length - 2];
    array[array.length - 2] = array[1];
    array[1]= placeHolder1;
    placeHolder1 = array[0];
    placeHolder2 = array[array.length - 1];
    
  }
  return array;
}
console.log(rotateArray([ 4, 3, 2, 1], 1));

//Could not figure out using solution from platform
function filterRange(arr, minVal, maxVal) {

  for (var i = 0; i < arr.length; i++) {
      
      if (arr[i] < minVal || arr[i] > maxVal) {
         
          for (var k = i+1; k < arr.length; k++) {
              arr[k-1] = arr[k];
          }
          arr.length--; // Decrease the length of the array by one
          i--; // To cancel the i++ operation effectively
      }
  }
}


//console.log(filterRange([10, 5, 7, 11], 8, 12));

let concatArray = (firstArray, secondArray) => {
  let newArray = [];

  for (i = 0; i < firstArray.length; i++) {
    newArray[i] = firstArray[i];
  }

  for (i = 0; i < secondArray.length; i++) {
    newArray[i + firstArray.length] = secondArray[i];
  }
  return newArray;
};

//console.log(concatArray(['a', 'b', 'c'], [5,6, 9, 8]));
