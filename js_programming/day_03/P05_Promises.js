
/*let checkEligibleToVote=(age)=>{
    if(age>=18){
        console.log('Eligible to vote ...');
    }else{
        console.log('Not eligible to vote ...');
    }
}*/

//if we don't create a promise object, then the function becaomes synchronized as in the example above.

let checkEligibleToVote=(age)=>{

    return new Promise((resolve, reject)=>{

        if(age>=18){
            resolve('Eligible to vote ...');
        }else{
            reject('Not eligible to vote ...');
        }

    }); 
}


checkEligibleToVote(15)
        .then(()=>{
            console.log('You can vote for Joe or Trump...');
        })

        .catch(()=>{
            console.log('You can not vote today...');
        })

        /*Promises can help us avoid using:

                Nested callBacks
                Callback Hell
                */
