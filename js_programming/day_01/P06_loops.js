
console.log('-------------------------- for loop () ---------------------------------------------');

for (let i = 0; i < 5; i++) {
   console.log('Wooden Spoon');    
}

console.log('-----------------------------------------------------------------------');

for (let i = 1; i < 7; i++) {
    console.log(i);
    if(i===3){
        break;
    }
    
}

console.log('-----------------------------------------------------------------------');
for (let i = 0; i < 11; i++) {
    if(i===3 || i===7){
continue;
    }

    console.log(i);
    
}