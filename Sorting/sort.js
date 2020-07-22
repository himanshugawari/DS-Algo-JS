// //#1 - Sort 10 schools around your house by distance:
// insertion sort
// small input, easy to code , space complecty(O(1))

// //#2 - eBay sorts listings by the current Bid amount:
// radix or counting sort
// bid is a number with a range(fixed length integer)

// //#3 - Sort scores on ESPN
// Quick sort
// better space complexity than merge sort

// //#4 - Massive database (can't fit all into memory) needs to sort through past year's user data
// Merge Sort
// large data so thinking of performance

// //#5 - Almost sorted Udemy review data needs to update and add 2 new reviews
// Insertion Sort
// assuming previous data is already sorted

// //#6 - Temperature Records for the past 50 years in Canada
// radix or counting Sort
// Quick sort if decimal places

// //#7 - Large user name database needs to be sorted. Data is very random.
// Quick sort (not worried about worst case of choosing pivot)
// Merge sort (memory is not a issue)

// //#8 - You want to teach sorting
// Bubble sort

const letter = ["a", "d", "z", "e", "r", "b"];

console.log(letter.sort());

const basket = [2, 65, 34, 2, 1, 7, 8];
// numbers are considered as string
console.log(basket.sort());

console.log(
  basket.sort(function (a, b) {
    return a - b;
  })
);
