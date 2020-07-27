for (var i = 0; i <= 10; i++) {
  //   console.log(i);
}
// var will work
// console.log(i);

for (let j = 0; j <= 10; j++) {
  //   console.log(j);
}
// let will not work
// console.log(j);

var t = 0;
while (t < 100) {
  //   console.log(t);
  t++;
}

//run atleast once
var d = 100;
do {
  console.log("great!");
  d++;
} while (d < 10);
