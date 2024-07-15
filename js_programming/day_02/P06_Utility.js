
function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

//module.exports=square(); // to export only 1 function

module.exports={
    square,
    cube
}

/*
In order to be able to use the members of one file in another, 1st we export them and then
into another file.
This is the step that you have to take.
Okay.
*/