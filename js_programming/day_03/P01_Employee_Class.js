class Employee{

    constructor(employeeName='Unknown', age=0,  gender='Unknown', salary=50_000){
        //We cannot overload the constructor in JavaScript. To do so, we should assign default values for the variables.
        this.employeeName=employeeName;
        this.age=age;
        this.gender=gender;
        this.salary=salary;
       
        //this keyword is used to create instances.
        //Evrytime we create an object of this class, the constructor will be executed to create the instance with these parameters.
    }

    // We can create toString() method

    toString(){
        return `Employee Name: ${this.employeeName}, Age: ${this.age}, Gender: ${this.gender}, Salary: ${this.salary}`;
    }

    // console.log("---------------- Creating static Method and vaariable ----------------");

    static myStaticMethod(){

    }

    static myStaticVaariable='';
    

   // console.log("---------------- Creating Object Method ----------------");

    work(){

console.log(`${this.employeeName} is working.` );

    }
}


  console.log("---------------- Creating Object of the class ----------------");
let employee_1 = new Employee('Ahmet', 25,'Male',100000);
console.log(employee_1);

let employee_2 = new Employee();
console.log(employee_2);
/*
We get the following in console because we assigned default values to the variables in constructor. If we did not, we would get Employee{}, meaning an empty object.
Employee {
  employeeName: 'Unknown',
  age: 0,
  gender: 'Unknown',
  salary: 50000
}
*/

// If we want to create a new employee passing only the name of the employee, we would get employee with the name we provided and all the other values would be default values.


let emplooyee_3= new Employee('Aygun');
console.log(emplooyee_3); 
/*
Employee {
  employeeName: 'Aygun',
  age: 0,
  gender: 'Unknown',
  salary: 50000
}
*/

let employee_4=new Employee('Hasan',40);
console.log(employee_4);
/*
Employee {
  employeeName: 'Hasan',
  age: 40,
  gender: 'Unknown',
  salary: 50000
}
*/

console.log('----------------- Calling the object method of employee through the object --------------------------------');

employee_1.work();
employee_4.work();
