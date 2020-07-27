// global scope
let myVariable = 100;
let myAge = 20;
let iWant = "pizza";

if (myAge === 20) {
  // let is block scope
  //   iWant = "burger";
  let iWant = "burger";
  console.log(iWant);
}

console.log(myVariable);
console.log(myAge);
console.log(iWant);

// const is similar to let i.e block scope
// const once assigned cannot be changed
