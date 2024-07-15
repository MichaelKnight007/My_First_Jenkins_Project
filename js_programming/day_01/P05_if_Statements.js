let score=70;

if(score>=60){
    console.log('Congrats!');
}

if(score>=60){
    console.log('Passed!!!');
}else{
    console.log('Failed');
}

if(score<=100 && score>=90){
    console.log('A');
}else if(score<90 && score>=80){
    console.log('B');
}else if(score<80 && score>=70){
console.log('C');
}else if(score<70 && score>=60){
    console.log('D');
}else{
    console.log('Failed');
}


console.log('----------------------------- NESTED IF -------------------------------------------');

let result;

if(score<=100 && score>=0){
    if(score<=100 && score>=90){
        result='A';
    }else if(score<90 && score>=80){
        result='B';
    }else if(score<80 && score>=70){
        result='C';
    }else if(score<70 && score>=60){
        result='D';
    }else{
        console.log('Failed');
    }

    console.log(result);

}else{
    console.log('Invalid Score!!!');
}