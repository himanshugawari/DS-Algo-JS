// Arrow functions
// function myFunction() {}
// let myFunction = () => {};

// Array.indexOf, Array.includes, Array.find
let foods = ["pizza", "burger", "pasta"];
// includes return boolean value
console.log(foods.includes("pizza"));
console.log(foods.includes("pizzaaaaa"));

// indexOf return index of elemnt if found else -1
console.log(foods.indexOf("pizza"));
console.log(foods.indexOf("pizza") > -1);
console.log(foods.indexOf("pizzaaaa") > -1);

let students = [
  {
    name: "tom",
    age: 16,
  },
  {
    name: "foo",
    age: 16,
  },
];
// return only one record
// if multiple matches return the first found
// if not found return undefined
const student = students.find((s) => {
  return s.name === "foo";
});
console.log(student);

// Array.map
// returns new array
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = array1.map((element) => {
  return element * 2;
  //   return 0;
});
console.log(array1);
console.log(array2);

// Array.filter
// return new array with true values
let array3 = array1.filter((element) => {
  if (element > 2) return true;
  return false;
});
console.log(array3);

//  Array.forEach
// does not return
array1.forEach((element) => console.log(element));

// Array.reduce
// return a single value
// let array1 = [1, 2, 3, 4, 5, 6];
const res = array1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
// loop runs 5 times as no initial accumulator value passed
console.log(res);

// iteration 1: accumulator=1 currentValue=2
// iteration 2: accumulator=3 currentValue=3
// iteration 3: accumulator=6 currentValue=4
// iteration 4: accumulator=10 currentValue=5
// iteration 5: accumulator=15 currentValue=6
//             return 21

// let array1 = [1, 2, 3, 4, 5, 6];
const res1 = array1.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
// loop runs 6 times as initial accumulator value is passed
console.log(res1);

// iteration 0: accumulator=0 currentValue=1
// iteration 1: accumulator=1 currentValue=2
// iteration 2: accumulator=3 currentValue=3
// iteration 3: accumulator=6 currentValue=4
// iteration 4: accumulator=10 currentValue=5
// iteration 5: accumulator=15 currentValue=6
//             return 21
