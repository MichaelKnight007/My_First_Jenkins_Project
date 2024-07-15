console.log(30+10);
console.log(50-20);
console.log(5*2);
console.log(10/2);
console.log(10%4);

console.log("---------------------------------------------------------------------");

let x=1000;
console.log(x);//1000

x=2000;
console.log(x);//2000

x+=1000;
console.log(x); // 3000 add and update the value

x-=1500;
console.log(x);//1500

x*=2;
console.log(x);//3000

x/=3;
console.log(x); //1000

console.log('-------------------------------------------------------------------------------');

console.log(50>60);
console.log(40<50);
console.log(10<=20);
console.log(20>=10);
console.log(10==10);
console.log('100'==100); // true ==> does not take care about datatype
console.log('100'===100); // false ==> does care about datatype

// != not equal   !== strict not equal 
console.log(100!='100'); // false
console.log(100!=='100');//true

console.log('-------------------------------------------------------------------------------');

console.log(true&&true);//true
console.log(true&&false);//false

console.log(false||true);//true
console.log(false||false);//false