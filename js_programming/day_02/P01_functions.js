function greetings(){
    console.log('Hello Programmers');
    console.log('Hello Cydeo');
    console.log('Hello World');
}


greetings();
console.log('Test completed successfuly');

console.log('----------------------- Functions with parameters ------------------------------');

function displayValue(value='Unknown Value'){ 
    // we provide "Unknown Value" as a default value, so if the user does not pass an argument, this expression will be printed. If we don't provide a data like this, then "undefiend" will be printed.
console.log(`The value is ${value}. `);
}

displayValue(100);
displayValue('AI');
displayValue();

console.log('------------------------------- Return Functions ------------------------------------------');

function square(number){
  let result=number*number
    return result;
}


let num=square(10);// with return function, this line is applicable. If we had created square function without return function, we would not be able to assign it to num.
console.log(num); //100


