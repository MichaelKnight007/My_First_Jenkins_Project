
console.log('-------------------- Creating Promises ------------------');

function getInToCar(){
    return new Promise((resolve) => {
        console.log('Get in to the car...');
        resolve();
       
    });
    
   
}

/*
All the functions are connected to each other. When you call get into car, it starts the car, and then it starts driving. Without get into car, it wouldn't start the car. It wouldn't start driving. 
*/

function startCar(){
    return new Promise((resolve) => {
    console.log('Car started...');
    resolve();
   
});
}

function driveTheCar(){
    return new Promise((resolve) => {
    console.log('Driving the car...');
    resolve();
   
});
}

console.log('-------------- Using Promises for the functions ---------------');

getInToCar()
.then(() => startCar())
.then(() =>driveTheCar())
.finally(() =>{
    console.log('Reached the destination');
});
