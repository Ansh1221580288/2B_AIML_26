//first way to print even numbers

for (let i=0; i<=100; i = i + 2) {
    console.log("i =" ,i);
}


//second way to print even numbers

for (let i=0; i<=100; i++) {
    if(i%2 === 0){
     console.log("i =" ,i);
    }
    else{
        console.log("i is odd =" ,i);
    }
}

