// setTimeout -> delay execution of a piece of code
// clearTimeout -> stops the setTimeout
console.log("start");
let timeId = setTimeout(() => {
  document.getElementById("name").innerText = "sometihng";
}, 5000); // runs after the duration specified i.e 2 seconds
console.log(timeId);
// clearTimeout(timeId); //if run before the setTimeout inerval it stops its execution
console.log("end");

// setInterval -> keeps a block of code executing continuously after set time interval
// clearInterval ->  stops the setInterval
console.log("start");
let i = 0;
let id = setInterval(() => {
  document.getElementsByTagName("h1")[1].innerText = ++i;
  if (i === 100) {
    clearInterval(id); // stops the setInterval
  }
}, 100); // continuosly runs after the duration specified
console.log("end");
