const sayHello  = function (name) {
  console.log("Hello", name);
}

sayHello("Shamayal");

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('Syed'); 

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('Shama');
console.log(greeting);

