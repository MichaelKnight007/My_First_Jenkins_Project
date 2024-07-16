
console.log(' ----------------- Creating Async Functions --------------------------------');

async function findElement(locator) {

    let promise=new Promise((resolve, reject) => {

        if (locator === 'is valid') {
            resolve('Element found');
        }else{
            reject('Element not found');
        }


    });

    return promise;
    
}


async function clickElement(locator) {

    findElement(locator)
    .then(() => {
        console.log('Element clicked');
    })
    .catch(() => {
        console.log('Element not found, so not clicked');
    });
}

async function runTest() {
   await clickElement('valid locator');
   await clickElement('invalid locator');
}

/*
Later on, when the test runs, I want to make sure that all function can execute at same time. That's why I include this async keyword to the functions.
To make sure that 1st function will not block the execution of second function or 3rd function. That's why I include this as in keyword.
And I also include, I think, keyword in second function, so that this function will also not block the execution of other codes.

now, if all of them gets executed at same time, there will be another problem.
There is a value that this function will have, and second function has to use it in order to perform its task.
But if they are executed at same time.
how do I make sure that the value that the 1st function have
the 1st function will have in the future. The second function can use it currently.
how do? How do you make the second function. Use the data that the 1st function will have in the future.
You create promise. That's where the promise will be needed. Okay.
*/