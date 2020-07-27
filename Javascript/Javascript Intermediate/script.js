const obj = {
  myFunction() {
    console.log(this);
  },
  myFunction3() {
    function myFunction4() {
      console.log(this);
    }
    return myFunction4(); // calling directly not using object therfore global
    // return anotherObject.myFunction4(); //return object as called using object
  },
};

const anotherObject = {
  myFunction4() {
    console.log(this);
  },
};

// const test1 = obj.myFunction;
// test1(); // global // when function invoked directly it refers global

// obj.myFunction(); // object // invoked using object return current object
// obj.myFunction3();

function myFunction2() {
  return this;
}

// const foo = myFunction2(); // global
// foo.a = 100;
// foo.b = 200;
// console.log(foo);
// delete foo.a;
// console.log(foo);

// const too = new myFunction2(); // reference to myFunction2
// too.a = 100;
// too.b = 200;
// console.log(too);
// delete too.a;
// console.log(too);

const t1 = new myFunction2();
const t2 = new myFunction2();
t1.a = 100;
t2.a = 200;
console.log(t1.a);
console.log(t2.a);

const q1 = myFunction2();
const q2 = myFunction2();
q1.a = 100;
q2.a = 200;
console.log(q1.a);
console.log(q2.a);
