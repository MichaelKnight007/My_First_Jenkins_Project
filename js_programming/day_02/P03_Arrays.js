
let elements=['Daniel', 'Ariel',1,2,3,4, 'c',true,false, 5.5];
console.log(elements);
console.log(elements.length);

let students=['Muhammet','Ali','Fatma','Hasan','Hüseyin'];
console.log(students);

console.log(elements[0]);

//update an element
elements[2]='Marry';

console.log(elements);


console.log("------------------------------------ iteration -------------------------------");

let numbers=[45, 55, 65, 70, 80, 90, 100];

for (let i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);
      
}

console.log("------------------------------------ Let ... of Loop -------------------------------");

for (let each of numbers){
    console.log(each);
}


console.log("----------------------- add/delete element to an array -----------------------------");

let students_1=['Ahmet','Mehmet','Korhan','Erhan'];
console.log(students_1);

// push ==> adds element to the end of array
students_1.push('Ersin');
console.log(students_1);

// unshift ==> adds element as the first element of array
    students_1.unshift('Yulia');
console.log(students_1);

//splice ==> remove a specific number of elements starting from a given index.
students_1.splice(2,2);
console.log(students_1);

//shift ==> remove the first element.
students_1.shift();
console.log(students_1);


//shift ==> remove the last element.
students_1.pop();
console.log(students_1);