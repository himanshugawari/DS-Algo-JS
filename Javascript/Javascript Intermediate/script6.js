// Closure

function counter() {
  let count = 0;
  let myVariable = 100;
  console.log(myVariable);
  return function anotherCounter() {
    // console.log("HEY!!!");
    ++count;
    console.log(count);
  };
}

// let res = counter()();

let res = counter();
res();
res();
res();
res();
console.log(res);
console.dir(res);
