let pushFront = (insert, array) => {
  let newArray = [insert];

  for (i = 1; i < array.length + 1; i++) {
    newArray[i] = array[i - 1];
  }
  return newArray;
};

//console.log(pushFront(5,[3, 4, 7, 11]));

let popFront = (array) => {
  let arrayIndexZero = array[0];
  let newArray = [];
  for (i = 1; i < array.length; i++) {
    newArray[i - 1] = array[i];
  }
  console.log(newArray);
  return arrayIndexZero;
};

//console.log(popFront([3, 11, 2]));

let insertAt = (array, val, index) => {
  let newArray = [];
  let length = 0;

  while (length != index) {
    length++;
  }

  for (i = 0; i < length; i++) {
    newArray[i] = array[i];
  }
  newArray[length] = val;

  for (i = newArray.length; i < array.length + 1; i++) {
    newArray[i] = array[i - 1];
  }
  return newArray;
};

//console.log(insertAt([9, 8, 6], 10, 2));
