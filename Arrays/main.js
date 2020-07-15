const string = ["a", "b", "c", "d"];
console.log(string[2]);
console.log(string);

console.log("push e");
string.push("e"); //O(1)
console.log(string);

console.log("pop e");
string.pop(); //O(1)
console.log(string);

console.log("pop d");
string.pop(); //O(1)
console.log(string);

console.log("push x at beginning");
string.unshift("x"); //O(n)
console.log(string);

console.log("remove x at beginning");
string.shift(); //O(n)
console.log(string);

console.log("push x at beginning");
string.unshift("x"); //O(n)
console.log(string);

console.log("push alien at position 2");
string.splice(2, 0, "alien"); //O(n)
console.log(string);

console.log("remove element at position 2");
//string.splice(2,1);
console.log(string.splice(2, 1));

console.log("push alien at position 2");
string.splice(2, 0, "alien");
console.log(string);

console.log("Index of alien " + string.indexOf("alien"));

console.log("Length of string array is " + string.length);

console.log("first " + string[0]);
console.log("last " + string[string.length - 1]);

console.log("Loop over an Array");
string.forEach(function (item, index) {
  console.log(item, index);
});

console.log("Shallow Copy");
var shalloCopy = string.slice();
console.log(shalloCopy);

console.log("string array keys");
console.log(Object.keys(string));

console.log("Joins all elements of an array into a string");
console.log(string.join());

console.log("Array inside a Object");
var pr = {
  var: "text",
  array: [1, 2, 3, 4, 5],
};
console.log(pr["var"]);
console.log(pr["array"]);
console.log("first element " + pr["array"][0]);
