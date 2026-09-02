let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);

companies.splice(1,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);


//arr.push(); //add at end
// arr.pop();  // delete at end 
//arr.unshift(); // add at start
//arr.shift(); // delete at start
//arr.slice(); // can cut a part of an array and return a new array
//arr.splice(start , deleteCount , values); // add or delete at any index
//arr.split(); // split a string into an array
//arr.concat(); // combine two arrays
//arr.toString(); // convert array to string
    
//arr.forEach(callBackFunction); // execute a function for each element in the array
//arr.map(callBackFunction); // create a new array by executing a function for each element in the array and returns a new array with the result of some operation.
//arr.filter(callBackFunction); // create a new array with all elements that pass the test implemented by the provided function.
//arr.reduce(callBackFunction); // perform some operation on each element of the array and reduce the array to a single value.



