const element = document.getElementById("name");
let i = 0;
element.onclick = function () {
  element.innerText = "Himanshu has clicked " + i + " times";
  console.log("clicked!!!", ++i);
};

function myFunction() {
  console.log("something else clicked!!!!!!!!!!");
}
