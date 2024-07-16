function getInToCar(callback){
    console.log('Get in to the car...');
    callback();
}

/*
So this parameter (callback) now it will be treated as a function that
this argument (callback) itself is a function. After we pass the parameter (callback), we create a function callback(). When you call this get into car function, you can also call another function, such as start the car, drive the car.
*/

function startCar(callback){
    console.log('Car started...');
    callback();
}

function driveTheCar(callback){
    console.log('Driving the car...');
    callback();
}



 //Using functions with callbacks
 /*1st thing. First, st I will call this, get into car. Okay, I will call this, get into car. But when I call this, get into car.
What argument it is expecting me to pass. It's expecting me to pass a function.
So I can pass this function. Argument and give what code fragment needs to be executed. So get in the car, and then next step issue. Whatever the function is right, so now it is start the car.*/

/*
and start the card. It also has another function call. You see.
it can execute another function call
so, which means in this, start the car. I can also, when I call the start car function, I can pass another function as the argument.
it can call another function. Just get into car. It, just call the function, start the car, start the car. It can call the function.
drive the car. Can it also call another function?
So drive the car. It can execute another function as well. So I can pass another function here, as the argument.
say, get into car calling, start the car function and start the car calling, get drive, car, function.
drive, fun
drive function. It is executing another function. So this is the code that I'm giving in this functions body such as
reach the destination.

THIS IS CALLED CALL BACK HELL.
*/

getInToCar(function(){

    startCar(function(){

        driveTheCar(function(){
            console.log('Reached destination...');
    });
   });
});