/* java script functions are First class citizens:
- It means JavaScript functions are vlues in themselves.
- Thwy can be stored in variables and passed into other functions,
just like any other piece of data in javaScript. 
*/
// const doc = doctorize('Apzal')
// console.log(doc)
/*function doctorize(firstName) {
  return `Dr. ${firstName}`;
}*/
/* These are **hoisted**, meaning javaScript 'hoists' or puts them at
the top of the file.
so if we try to run a function
that is defined with the "function" keyword before it is defined (above its definition),
then there's no error and the fujnction is executed successfully */

// Anon Function
/*const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};*/
/* These are **not hoisted**, meaning javascript doesnot put them at the 
top of the file.
so if a function is not defined with the function keyword,
and if we try to run it before it is defined ( above its definition),
then there's an error and the function fails to execute */

// Function Expression
/*const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};
const doc = doctorize('Apzal');
console.log(doc); */

// Arrow functions

const inchToCM = (inches) => {
  console.log(inches);
  return inches * 2.54;
};
const resultcm = inchToCM(10);
console.log(resultcm);
const funcA = () => {
  console.log(`Hi`);
};
funcA();

const add = (a, b = 3) => a + b;
const inTocm = (inches) => inches * 2.54;
console.log(add(100));
console.log(inTocm(25));
// returns an object
const makeAPerson = (first, last) => ({ name: `${first} ${last}`, age: 0 });
const person = makeAPerson('Apzal', 'Amrin');
console.log(person);

(function (age) {
  console.log(`you are cool and your age is ${age}`);
})(10);
// parantheses run first in javascript , so we have wrapped the function in ()
// the function immediately runs.
// the arguments passed here is 10 for parameter age.
function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `Your name ${gameName} score is ${score}`;
  };
}
console.log(createGame);
