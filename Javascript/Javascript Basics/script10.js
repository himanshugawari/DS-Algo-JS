// == v/s ===
// 1. the types of a and b are same -> value, memory
// 2. the types of a and b are different -> type conversion and then compare

// == or ===
// 1. check types
// 2. if type is not same, and operator is === -> return false
// 3. if type is not same, and operator is == -> change type and then compare values

let a = 2;
let b = "2";
console.log(a === b); // false
console.log(a == b); // true (a is converted to string similar to below)
console.log(a.toString() == b); // true

let x = [1, 2, 3];
let y = "1,2,3";
console.log(x === y); // false
console.log(x == y); // true (x is converted to string similar to below)
console.log(x.toString() == y); // true ("1,2,3"=="1,2,3")
console.log(x.toString(), y);

let p = [1, 2, 3];
let q = [1, 2, 3];
let r = p;
console.log(p === q); // false memory location is compared
console.log(p == q); // false memory location is compared
console.log(p === r);

let m = 0;
if (m) {
  console.log("m is defined");
} else {
  console.log("m is not defined");
}

let n = 0;
if (n !== undefined || n !== false) {
  console.log("n is defined");
} else {
  console.log("n is not defined");
}
