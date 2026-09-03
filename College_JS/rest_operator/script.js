// rest operator in javascript 

//It allows us to represent an indefinite number of arguments as an array. The rest operator is denoted by three dots (...) followed by the name of the array that will hold the remaining arguments.

// Example 1: Using rest operator in a function
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));

