const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(numbers);

function InsertionSort(array) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      //find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          //move number to right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}

InsertionSort(numbers);
console.log(numbers);
