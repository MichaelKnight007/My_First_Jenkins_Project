// let name; // when you print, you'll get "undefined" -->unintentional absence

let name=null // intentional absence

console.log(name);
console.log(typeof name); // returns object, null seems as an object, so it's accepted as a bug in JS. Normally null is a primitive data type.


let name_1='Cydeo'; // we can use either "" or ''.
console.log(name_1); // Cydeo
console.log(typeof name_1); // String

console.log("---------------------------------------------------------------------");

let number=35;
console.log(number);
console.log(typeof number);

console.log("---------------------------------------------------------------------");

let number_1=5.5;
console.log(number_1);
console.log(typeof number_1);

console.log("---------------------------------------------------------------------");


let isEmployed=true;
console.log(isEmployed);
console.log(typeof isEmployed);

console.log("---------------------------------------------------------------------");

const NUMBERS_OF_MONTHS_IN_A_YEAR=12;
const NUMBERS_OF_DAYS_IN_A_WEEK=7;

console.log(NUMBERS_OF_MONTHS_IN_A_YEAR); //12
console.log(NUMBERS_OF_DAYS_IN_A_WEEK); // 7

NUMBERS_OF_MONTHS_IN_A_YEAR=13;
NUMBERS_OF_DAYS_IN_A_WEEK=8; // We'll not get any checked exception.
//But when we run it, it's gonna give;

console.log(NUMBERS_OF_MONTHS_IN_A_YEAR); //TypeError
console.log(NUMBERS_OF_DAYS_IN_A_WEEK); //TypeError

