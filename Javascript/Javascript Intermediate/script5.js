// Hoisting -> var declaration is moved to the top not the initialiazation
// var and function are hoisted
// function whole is moved to the top

console.log(myString);
var myString = "Himanshu";
console.log(myString);

sayMyName();
function sayMyName() {
  console.log("HELLO");
}
sayMyName();
