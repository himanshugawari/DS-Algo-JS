let obj = {
  0: "hello",
  1: "world",
};

let arr = ["hello", "world"];

console.log(obj[0] + obj[1]);
console.log(arr[0] + arr[1]);

console.log(obj);
console.log(arr);

arr[3] = "!!!";

console.log(arr);
console.log(arr[2]);

// arr["myKey"] = "NEW";

// console.log(arr);

arr.pop();

console.log(arr);

arr.push("test");

console.log(arr);

arr.pop();

console.log(arr);

arr.pop();

console.log(arr);
