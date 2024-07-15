
console.log("------------------- math operator Function -----------------------");
function calculate(num1, num2, opeartor){
    if (opeartor==='-'){
       return num1-num2
    }else if(opeartor==='+'){
        return num1+num2;
    }else if(opeartor==='*'){
        return num1*num2;
    }else if(opeartor==='/'){
        return num1/num2;
    }else{
        console.log('Invalid operator.');
    }
}

console.log("------------------- Binary Search Square Root Function -----------------------");
//write program that calculates square root of a number using binary search

function binarySearchSqrt(num, precision=0.00001){
    let left=0;
    let right=num;

    while(right-left>precision){
        let mid=(left+right)/2;

        if(mid*mid===num){
            return mid;
        }else if(mid*mid<num){
            left=mid;
        } else{
            right=mid;
        }
    }

    return left;
}

module.exports={
    calculate,
    binarySearchSqrt
};

