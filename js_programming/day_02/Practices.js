//Create an array of String and add 10 student names and get the solution using tabnine

let students = ['John', 'Jane', 'Michael', 'Emily', 'Sarah', 'David', 'Michael', 'Olivia', 'James', 'Sophia'];

//Display all students
console.log(students);

//set the first student name as 'Ersin'
students[0] = 'Ersin';


//Display all students after updating the first name
console.log(students);

//Add a new student name to the end of array

students.push('Mark');
console.log(students);

//set the last name of the last student to 'Smith'

students[students.length - 1] = 'Smith';
console.log(students);

console.log('---------------------- Manually triggering  AI ----------------------------------');

//Display all the elements of the array in the reverse order

for (let i = students.length - 1; i >= 0; i--) {
  console.log(students[i]);
}

console.log('-----------------------------------------------------------------------');


//Display the number of students in the array
console.log('Number of students:', students.length);

console.log('---------------------- Conditional Statements ----------------------------------');

let email='cydeoschool@gmail.com';

//Check if the email contains '@gmail.com'

if(email.includes('@gmail.com')){
    console.log('Email is from gmail');
}else{
    console.log('Email is not from gmail');
}

console.log('----------------------------- Some complex tasks ------------------------------------------');

//create a new array of numbers and add 7 numbers
let numbers = [1, 2, 3, 4, 5, 6, 7];


 //use for of loop to print each number in the array
 for (let number of numbers) {
  console.log(number);
}


// create an array of numbers having positve and negative 15 numbers

let mixedNumbers = [-5, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, -15];

//find the sum of all the numbers in the array

let sum = 0;

for (let number of mixedNumbers) {
  sum += number;
}

//find the average of all the numbers in the array

let average = sum / mixedNumbers.length;

console.log('Sum:', sum);
console.log('Average:', average);

//find the maximum and minimum numbers in the array

let max = Math.max(...mixedNumbers);
let min = Math.min(...mixedNumbers);

console.log('Maximum:', max);
console.log('Minimum:', min);

//create a loop to find the maximum and minimum numbers in the array   

let max2 = mixedNumbers[0];
let min2 = mixedNumbers[0];

for (let number of mixedNumbers) {
  if (number > max2) {
    max2 = number;
  }
  if (number < min2) {
    min2 = number;
  }
}

console.log(max2);
console.log(min2);

//create an array of unsorted 10 unsequeltial integers

let unsortedNumbers = [5, 9, 1, 7, 8, 2, 3, 6, 4, 0];

//write a function to sort the array in ascending order

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}


//write a function to sort the array in ascending order, Do not use any built in functions

function bubbleSortNoBuiltIn(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return array;
}


//write a program to sort the array in ascending order

console.log('Unsorted:', unsortedNumbers);
console.log('Sorted:', bubbleSort(unsortedNumbers));
console.log('Sorted (no built-in functions):', bubbleSortNoBuiltIn(unsortedNumbers));

console.log('---------------------- Array Manipulation ----------------------------------');

//write a program not a function to sort the array in ascending order, Do not use any built in functions like sort method

let unsortedNumbers2 = [5, 9, 1, 7, 8, 2, 3, 6, 4, 0];

for (let i = 0; i < unsortedNumbers2.length; i++) {
  let minIndex = i;
  for (let j = i + 1; j < unsortedNumbers2.length; j++) {
    if (unsortedNumbers2[j] < unsortedNumbers2[minIndex]) {
      minIndex = j;
    }
  }
  let temp = unsortedNumbers2[i];
  unsortedNumbers2[i] = unsortedNumbers2[minIndex];
  unsortedNumbers2[minIndex] = temp;
}


