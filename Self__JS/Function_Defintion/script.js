//Definition of function 

function summ (){
     console.log(2+2);
}
summ();  //calling of a function


// another defintion of function

function sum (a,b){ // passing parameters to a function
    console.log(a+b);
}
sum(5,3);  //calling of a function with arguments


// another defintion of function

function sum (a,b){ // passing parameters to a function
    s = a+b;
    return s;  //returning value from function
}

let result = sum(5,4);  //calling of a function with arguments and printing the returned value
console.log(result);