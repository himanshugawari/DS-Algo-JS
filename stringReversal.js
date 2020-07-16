const reverse1 = (str) => str.split("").reverse().join("");

const reverse2 = (str) => [...str].reverse().join("");

function reverse(str) {
  return str.split("").reverse().join("");
}

function reverse3(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid String";
  }
  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.join("");
}

console.log(reverse("hello"));
console.log(reverse1("hello"));
console.log(reverse2("hello"));
console.log(reverse3("hello"));
console.log(reverse3("he"));
console.log(reverse3("h"));
