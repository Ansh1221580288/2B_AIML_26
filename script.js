function sum (){
    const a = 50;
    const b = 41;
    const c = a + b ;
    // return a + b ;
    // console.log(c);   // for printing  in console  window 
    document.write(c);  // for printing in browser 
}

// sum();
// console.log(sum); // for printing the sum function


//------------------------------------------------------------ pop up box -----------------------------------------------------------------------------

//   alert()
//   prompt()  //to take input from user
//   confirm()


function vote(){
    let age = parseInt(prompt("Enter your age : "))
    if(age>=18){
        alert("You are eligible for Voting");
    }else{
        alert("You are not eligible");
    }
}