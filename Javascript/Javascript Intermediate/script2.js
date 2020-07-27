"use strict"; // can be global

const obj = {
  x: 100,
};

function myFunction() {
  //   "use strict"; // can be inside a function

  // with strict js will not convert and return as it is

  // without strict if your this is object(or empty object) it return object(or empty object)
  // without strict if your this is null or undefined its converted to global
  // without strict if your this is primitive its converted to object type

  console.log(this); // this is null i.e undefined
  //   this.x = 200;
}

// myFunction();
myFunction.call({});
myFunction.call(obj);
myFunction.call(undefined);
myFunction.call(null);
myFunction.call("string");

// myFunction.call(obj);
// console.log(obj.x);

// 1. It prevents cnversion of this
//  2. Prevents overwriting of readonly global values
