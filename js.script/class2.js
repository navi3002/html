const maxvalue = Math.max(10, 12, 35, 60, 2, 55);
console.log(maxvalue);
// no.of paramaters are special
//  in this add more number of parameters
// Math is class max is a function
const floatValue = parseFloat('2.032565');
console.log(floatValue);
let intValue = parseInt('2356abcd');
console.log(intValue);
intValue = parseInt('abcd2356');
console.log(intValue);
// in this alpha numeric not work its resulst as Nan.
let today = Date.now();
console.log(today);
// returns in a milliseconds since january 1 1970 00:00:00 UTC
function calculationBill() {
  const total = 100 * 1.13;
  return total; // total is returned
}
// Variables created inside a function are not available outside the funsction.Dateit is tempor.
// Functions - arguments and parameters.

// - Parameters are like placeholders for a data that will be pased to a function.
// - argumentd are the actual vlues passed to a function while calling it.
function calculateBill(billAmount, taxRate) {
  console.log(billAmount + ' - ' + taxRate);
}
calculateBill(100, 0.13);
// here 100,0.13 are arguments

//- parameters are variables local to the function;available only inside the function.
//-you can also pass varibles as arguments during a function call.
// - we can also pass expression as arguments to a function.

let billtotal = calculateBill(20 + 10 + 50, 0.75);
console.log(billtotal);

// default value for the parameter
function yell(name = 'Silly Goose') {
  return `He $ {name.toUpperCase()}`;
}
let greetings = yell('Apzal'); // Hey Apzal
console.log(greetings);
greetings = yell(); // Hey SILLY GHOOSE
console.log(greetings);
// Above, if we don't pass any arguments to yll
//fuctions , then it takes default value in function definitions
// here silly ghoose, else itbtakes whatver we pass a s arguments
