//  constructor
// __proto__ vs prototype

function Customer(name, type = "normal") {
  this.name = name;
  this.type = type;
}

Customer.prototype.someMethod = 2;

const c1 = new Customer("Donald Trump");

console.log(c1);
console.log(c1.someMethod);
