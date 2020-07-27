const obj = {
  keyname: "value1",
  keyname2: "value2",
};

console.log(obj);
console.log(obj.keyname);
console.log(obj.keyname2);

obj.keyname2 = "value3";

console.log(obj.keyname2);
console.log(obj);

obj.keyname3 = "value33";

console.log(obj.keyname3);
console.log(obj);

obj.keyname = null;

console.log(obj);

delete obj.keyname;

console.log(obj);
