
console.log('------------ try/catch block --------------------');
console.log("Before error occurs...");

try{
console.log(result);
}catch(e){
console.log('An error occured during run time...');

//to print the errors, we need to add e.

console.log('After adding e',e);

    }finally{
        console.log('Error handling is completed... Finally block!!!');
    }
// If we run result without assigning a data, it'll give an exception at run time. 
// ReferenceError: result is not defined
// to handle it, we need try catch block


console.log('After exception ...');



console.log('------------ throw keyword --------------------');

console.log('New test starts here ....');

throw new console.error('Something went wrong...');

//  the codes after throw key word will not be executed...

console.log('Code ends here...');

/*
------------ throw keyword --------------------
New test starts here ....
c:\Users\Ersin\Desktop\VS Code Projects\js_programming\day_03\P04_Exceptions.js:30
throw new console.error('Something went wrong...');
*/