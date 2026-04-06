// // sometimes we dont want a function to run immediately. we may run it later after a certain time -> setTimeout, 
// // sometimes we run repeatedly every few seconds->setInterval

// function sayHi(){
//     console.log("Hello");
// }
// setTimeout(sayHi,1000); //it prints after two seconds
// //if we write sayHi that will run immediately


// //with arguments
// function greet(name,age){
//     console.log(`${name}, ${age}`);
// }
// setTimeout(greet,2000,"Hi","Tharuniga");


// //setInterval
// //it will repeat the function for every delay ms. can stop it when we dont want it anymore

// let count = 0;
// let timerId = setInterval(()=>{
//     count++;
// },2000);

// count = 0;
// counter = setInterval(()=>{
//     console.log(count);
//     count++;
//     if(count > 10){
//         clearInterval(counter);
//         console.log("Counter stopped");
//     }
// },1000);

// setTimeout(()=> alert("Welcome to the website"),1000);
setTimeout(()=>document.getElementById('popup').style.display = 'none',1000);
