function foo() {
  console.log("Inside Foo");
}

// foo();

function soo(string = "himanshu") {
  console.log("Inside soo");
  console.log(string);
}

// soo();
// soo("hello sooooo");
// soo(123456789);

function too(string = "himanshu") {
  return function () {
    return "hey i'm a function";
  };
  // because of return below code will not run
  console.log("Inside soo");
  console.log(string);

  // by deafult it always return undefined
  // return undefined;
}

let res = too(321654789);
console.log(res);
console.log(res());
