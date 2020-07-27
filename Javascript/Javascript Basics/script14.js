let i = 100;
let j = 0;

try {
  if (j === 0) {
    throw "j cannot be zero";
  }
  console.log(i / j);
} catch (error) {
  console.log(error);
}
