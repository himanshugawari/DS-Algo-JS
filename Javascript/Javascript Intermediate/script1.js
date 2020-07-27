// hoisting -> calling function before implmenting
// console.log(myFunction());
// function myFunction() {
//   return 100;
// }

console.log(myFunction());
let myFunction = () => {
  return 100;
};
// const, let -> Cannot access 'myFunction' before initialization
// var -> myFunction is not a function

//  var and function are hoisted
//  let, const and arrow functions are not hoisted
