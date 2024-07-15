let schoolName='CYDEO SCHOOL';

console.log(schoolName.length);//12

console.log('------------------------ chatAt()-----------------------------------------');

console.log(schoolName[6]); // We can use index number to get each character like charAt().
console.log(schoolName[9]);
console.log(schoolName.charAt(9));


console.log('--------------------- toLowerCase() / toUpperCase() ----------------------------------');
schoolName=schoolName.toLowerCase(); // cydeo school
console.log(schoolName);


schoolName=schoolName.toUpperCase(); // CYDEO SCHOOL
console.log(schoolName);

console.log('--------------------- comparison of Strings ----------------------------------');

let expectedText='Java Script';
let actualText='javascript';

console.log(expectedText===actualText); //false, due to case sensitivity

console.log('--------------------- replace() ----------------------------------');

let x='Phyton phyton Phyton phyton Phyton phyton';

let y=x.replace('Phyton','Java');
console.log(y);

let z=x.replace(/phyton/g,'java'); //replaces every matching string
console.log(z);

let str='ABCD1230EFGH6548HGKL9874LKMN'; //remove all the digits // ask this question to ai
let str_1=str.replace(/\d/g,'');
console.log(str_1);


console.log('--------------------- iterating String ----------------------------------');

let w='JavaScrpit';

for (let i = 0; i < w.length; i++) {
   console.log(w[i]);    
}

console.log('--------------------- subString() ----------------------------------');


let email='cydeoschool@gmail.com';
let domain=email.substring(email.indexOf('@')+1,email.indexOf('.'));
console.log(domain);


console.log('--------------------- concatination ----------------------------------');

let employeeName='Brenna';
let employeeAge=35

console.log('Employee name is '+employeeName);
console.log(`Employee name is ${employeeName}`);

console.log('Employee age is '+employeeAge);
console.log(`Employee age is ${employeeAge}`);

console.log(`${employeeName} is a very hard working lady and she is ${employeeAge}.`);
