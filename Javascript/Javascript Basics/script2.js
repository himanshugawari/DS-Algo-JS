// global scope
var myVariable = 100;
var myAge = 20;
// hoisting
// var iWant;
// console.log(iWant);

if (myAge === 20) {
  // var does not have block scope
  // var is function scope
  var iWant = "pizza";
  // changes to
  //   iWant = "pizza";
}

console.log(myVariable);
console.log(myAge);
console.log(iWant);
