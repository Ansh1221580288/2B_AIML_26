//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<for each loop >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// For each is a method that allows you to iterate operations over one to one each  element or index in  an array or a collection.

// array.forEach(callBackFunction)
// call back is a function passed as an argument to the another function .

// there are two ways to write the callback function, one is using the arrow function and the other is using the normal function syntax.

// Using normal function syntax
// arr.forEach(function(val) {
//        console.log(val);
// })

// Using arrow function syntax
// arr.forEach((val) => {
//        console.log(val);
// })    

// The forEach method takes three arguments, the first is the current value, the second is the index of the current value, and the third is the array itself.
// const arr = [10,20,2,30,45,45]
// arr.forEach((val, index, array) => {
//        console.log(`Value: ${val}, Index: ${index}, Array: ${array}`);
// })

//Very important note for (for each loop or method).

//Higher order functions or methods are functions that take other functions as arguments or return functions as their result. forEach is an example of a higher-order function because it takes a callback function as an argument.



// example of using foreach loop to iterate over an array.

// let nums = [67, 3, 4, 5, 6];

// nums.forEach((val) => {
//  square = val * val;
//  console.log(`The square of ${val} is ${square}`);
// })


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<map method >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//map returns a new array by executing a function for each element in the array. It is similar to forEach but it returns a new array with the result of some operation.
//example of using map to create a new array with the square of each element in the original array.
//similar it have also 3 arguments, the first is the current value, the second is the index of the current value, and the third is the array itself.

// let nums = [67,54,14,25,63,533];
// let doubledNums = nums.map((val) => {
//     return val * 2;
// });

// console.log(doubledNums); // [134, 108, 28, 50, 126, 1066]  // original array is not changed because map returns a new array.
// console.log(nums);


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<filter method >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//filter returns a new array with all elements that pass the test implemented by the provided function. It is similar to map but it returns a new array with only the elements that pass the test.

//example of using filter to create a new array with only the even numbers from the original array.
//similar it have also 3 arguments, the first is the current value, the second is the index of the current value, and the third is the array itself.

// let nums = [67,54,14,25,63,533];
// let evenNums = nums.filter((val) => {
//     return val % 2 === 0;
// });

// console.log(evenNums); // [54, 14]  // original array is not changed because filter returns a new array.
// console.log(nums);


//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< reduce method >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// It performs some operation on each element of the array and reduces the array to a single value. It is similar to map and filter but it returns a single value instead of a new array.
//It takes two arguments, the first is the accumulator or we can say it previous value, and the second is the current value. The accumulator is the value that is returned after each iteration and it is used to accumulate the result of the operation. The current value is the current element being processed in the array.

// let nums = [67,54,14,25,63,533];
// let sum = nums.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
// });

// console.log(sum); // 756  // original array is not changed because reduce returns a single value.


// And these doesnot require to call the function for each element in the array, it automatically does that for you.

let nums = [89 ,45,23,98,95,96,90,25,100,75,65,];
let filteredNums = nums.filter(
    (val) => {
       return val>90 ;
    }
)
 console.log(filteredNums); // [98, 95, 96, 100]  // original array is not changed because filter returns a new array.















