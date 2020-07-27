// Prototypal inheritane model -> js use this

// Object oriented model
//  classes inherit from class and object of these class es are used

function Pizza(type) {
  this.type = type;
}

Pizza.prototype.isShopOpen = true;

const myPizza = new Pizza("Extra Cheese");
const myPizza2 = new Pizza(" NOO Extra Cheese");
console.log(myPizza);
console.log(myPizza2);

// myPizza.isShopOpen = false;
myPizza.__proto__.isShopOpen = false;

console.log(myPizza);
console.log(myPizza2);

// console.log(myPizza.isShopOpen);
// console.log(myPizza2.isShopOpen);

function Customer(name, type = "normal") {
  this.name = name;
  this.type = type;
}

Customer.prototype.greet = function () {
  if (this.type === "normal") {
    return this.name + ", hello!!!";
  } else {
    return "Mr. " + this.name + ", Welcome Sir!!!!!!";
  }
};

const c1 = new Customer("Donald Trump");
const c2 = new Customer("Himanshu", "RICH");

console.log(c1);
console.log(c2);
console.log(c1.greet());
console.log(c2.greet());

const func = c1.greet;
console.log(func.call(c2));
