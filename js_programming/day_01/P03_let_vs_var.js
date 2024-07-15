
let school='CYDEO';

console.log(school);

// Difference_1: let and const are block-scoped. They are only accessible within the block where they are defined.

// let school ='MIT'; // Difference_1: let will create a checked exception if we re-declare the same name using let, but const will not. It means variable name will not be duplicated.

console.log('----------------------------- var as a local variable ---------------- ');

if(true){
    var a = 10;
}

console.log(a);  // Difference_2: var can NEVER be a  local variable, it can be always accesible.