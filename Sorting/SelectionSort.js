const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(numbers);

function selectionSort(array) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    let minElement = array[i];
    let minElementIndex = i;
    for (let j = i; j < len; j++) {
      if (minElement > array[j]) {
        minElement = array[j];
        minElementIndex = j;
      }
    }
    let temp = array[i];
    array[i] = array[minElementIndex];
    array[minElementIndex] = temp;
  }
}

function selectionSort1(array) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    //set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
}

selectionSort1(numbers);
console.log(numbers);
