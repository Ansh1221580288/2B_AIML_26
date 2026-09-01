// let student = {
//     name: "Ansh Shukla",   
//     age: 20,
//     major: "Aiml Engineering",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }                                                                                                                                                                                   
// };

// student.greet();    

// //other way to define a method in an object
// let student_1 = new Object();
// student_1.name = "Ansh Shukla";
// student_1.age = 20;
// student_1.major = "Aiml Engineering";
// student_1.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };
// student_1.greet();


// // function constructor
// function Student(name, age, major) {
//     this.name = name;   
//     this.age = age;
//     this.major = major;
//     this.greet = function() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

// let student_2 = new Student("Ansh Shukla", 20, "Aiml Engineering");
// student_2.greet();


// //class
// class StudentClass {
//     constructor(name, age, major) {
//         this.name = name;   
//         this.age = age;
//         this.major = major;
//     }
//     display() {
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
//     }   
// }

// let student_3 = new StudentClass("Ansh Shukla", 20, "Aiml Engineering");
// student_3.display()




//  --------------------------------------------------------------------------Questions 01--------------------------------------------------------------------

// let Product = {
//     product_Id: 101,
//     product_Name: "Laptop",
//     Price: 50000,
//     quantity:10,
//     total_price : function() {
//         return this.Price * this.quantity;
//     },
//     update_quantity : function() {
//         console.log(`Quantity before update: ${this.quantity}`);
//         let new_quantity = parseInt(prompt("Enter the quantity to be added: "));
//         this.quantity = new_quantity + this.quantity;
//         return this.quantity;
//     },
//     show_product_details : function() {
//         console.log(`Product ID: ${this.product_Id}`);
//         console.log(`Product Name: ${this.product_Name}`);
//         console.log(`Price: ${this.Price}`);
//         console.log(`Quantity: ${this.quantity}`);
//     }
// }

// Product.show_product_details();
// Product.update_quantity();
// Product .show_product_details();


// ---------------------------------------------------------------------------Questions 02--------------------------------------------------------------------

let bankAccount = {
  holderName: "Ansh Shukla",
  accountNumber: "1234567890",
  balance: 10000,
  
  deposit: function(amount){
    if(amount > 0){
        this.balance += amount;
        console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
    } else {
        console.log("Deposit amount must be positive.");
    }
  },

  withdraw: function(amount){
    if(amount > 0 && amount <= this.balance){
        this.balance -= amount;
        console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
    } else {
        console.log("Invalid withdrawal amount or insufficient funds.");
    }
},

displayBalance: function(){
    console.log(`Current Balance: ${this.balance}`);
  }
}

bankAccount.displayBalance();
bankAccount.deposit(5000);
bankAccount.withdraw(3000);
bankAccount.displayBalance();
