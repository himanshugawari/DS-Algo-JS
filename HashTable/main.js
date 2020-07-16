// keys only string
// values can be number, string, boolean, array, object , functions
// insertions in any order
let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("aahhhhhhhhh!!!");
  },
};

console.log(user.age); //O(1)
console.log(user.name);
console.log(user.magic);
user.scream(); //O(1)
console.log(user);
user.spell = "abra ka dabra"; //O(1)
console.log(user);
console.log(user.spell);
user.scream();

// keys can be number, string, boolean, array, object , functions
// values can be number, string, boolean, array, object , functions
// Maintains insertion order
const a = new Map();
a.set("himanshu", "gawari");

// similar to map but only stores keys no values
const b = new Set();
b.add(function laugh() {
  console.log("hahahahah!!!");
});

console.log(a);
console.log(b);
