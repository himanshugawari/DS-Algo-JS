function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid String";
  }
  const backwardArray = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwardArray.push(str[i]);
  }
  console.log(backwardArray);
  return backwardArray.join("");
}

function reverse2(str) {
  // check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Invalid String";
  }
  return str.split("").reverse().join("");
}

const reverse3 = (str) => str.split("").reverse().join("");

const reverse4 = (str) => [...str].reverse().join("");

function reverse5(str) {
  return str.split("").reverse().join("");
}

console.log(reverse("hello"));
console.log(reverse2("hello"));
console.log(reverse3("hello"));
console.log(reverse4("hello"));
console.log(reverse5("hello"));
