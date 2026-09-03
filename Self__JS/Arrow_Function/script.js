// What is An arrow function?
// An arrow function is a compact way of writing a function expression in JavaScript. It allows you to write functions with a shorter syntax , which can be useful in certain situations.

// Syntax of an arrow function
// The basic syntax of an arrow function is as follows:

// () => {
//   // function body
// }
// Now we can store it in new variable and call it like a normal function

//curly braces are optional if the function body contains only a single statement. In that case, you can omit the curly braces and the return keyword, and the value of the expression will be returned automatically.
// const myFunction = () => {
//   console.log("Hello, World!");
// }
// myFunction(); // Output: Hello, World!

// we can also pass parameters to an arrow function.

const add = (a, b) => {
  return a + b;
}
add(5, 3); // Output: 8
console.log(add(5, 3)); // Output: 8 