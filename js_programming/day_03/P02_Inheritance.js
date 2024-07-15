
class Person{

    constructor(name, age, gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }

eat(){
    console.log(`${this.name} is eating.`);
}


}

class Student extends Person{
}

//Student class extends Person class so it has all properties and methods of Person class. We cannot inherit the constructor of parent class, but we can call it. If we need to add some other variables or methods to child class, we need to call the constructors of variables of parent class. Otherwise, we we don't need to call explicitly, it can implicitly call the constructor of parent class.

class Teacher extends Person{

    teach(){
        console.log(`${this.name} is teaching.`);
    }

}



class Manager extends Person{

    constructor(name, age, gender, city, state){
        super(name, age, gender);
        this.city=city;
        this.state=state;
    }

    work(){
        console.log(`${this.name} is working.`);
    }
}
    

let student = new Student("John", 18, "Male");
let teacher = new Teacher("Mary", 45, "Female");


let manager= new Manager("Tom", 30, "Male", "New York", "NY");

console.log(student);
console.log(teacher);
console.log(manager);
student.eat();
teacher.eat();

// work() is unique to Manager and and teach() method is unique to Teacher class, so we can call them only through respective objects.
manager.work();
manager.work();
teacher.teach();
