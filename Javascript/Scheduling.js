// sometimes we dont want a function to run immediately. we may run it later after a certain time -> setTimeout, 
// sometimes we run repeatedly every few seconds->setInterval

function sayHi(){
    console.log("Hello");
}
setTimeout(sayHi,1000); //it prints after two seconds
//if we write sayHi that will run immediately


//with arguments
function greet(name,age){
    console.log(`${name}, ${age}`);
}
setTimeout(greet,2000,"Hi","Tharuniga");


//setInterval
//it will repeat the function for every delay ms. can stop it when we dont want it anymore

let count = 0;
let timerId = setInterval(()=>{
    count++;
},2000);

count = 0;
counter = setInterval(()=>{
    console.log(count);
    count++;
    if(count > 10){
        clearInterval(counter);
        console.log("Counter stopped");
    }
},1000);

setTimeout(()=> alert("Welcome to the website"),1000);
setTimeout(()=>document.getElementById('popup').style.display = 'none',1000);

// Decorators -> we use decorators to add extra features and functionalities without changing the original logic,
// if without decorator 

function placeorder(item){
    console.log("Logging...");
    console.log("Checking payment..");
    console.log("Tracking..");
    return `order placed ${item}`;
}
placeorder("idly") // everything is mixed all inside one function.
//here the functions are big and messy , and also hard to maintain, so that we create decorators to add extra functionality by using other functions

function placeorder(item){
    return `Order placed: ${item}`;
}
function logDecorator(func){
    return function(item){
        console.log("Logging...");
        return func(item);
    };
}
const loggedplaceorder = logDecorator(placeorder);
console.log(loggedplaceorder("Pizza"));
//instead we create a separate function for order, only logging , once decorator created we can use everywhere
//it wont affect the original function - easy to maintain --> instead of keeping inside one function , we split into layers , core functions + add-ons


//Forwarding -> i got some inputs.. i will pass them exactly to another function...
// if you give an order to a waiter -> waiter will pass the same to the kitchen
//return func(item) => it will acts as an forwarding because it forwards the input to the originak function

//call()  //because here,
let user = {
  name: "Tharun",
  sayHi() {
    console.log(this.name);
  }
};
setTimeout(user.sayHi.bind(user),1000);
user.sayHi();  // here this = user;
//but if we assign 
let say = user.sayHi;
say();  //this will get lost and shows undefined because user points to say

//Syntax => func.call(thisValue, arg1, arg2,...)  //it lets you set this manually
function greet(msg){
    console.log(msg + " "+ this.name);
}
user = {name: "Tharun"};
greet.call(user,["Hello","Hi"]);

//apply() is also same as call but we send as array 
function greet(msg){
    console.log(msg + " " + this.name);
}
user = {name : "tharuni"}
greet.apply(user,["Hello"]);


//call and apply runs immediately => bind returns a new function that will executes later 
function greet(msg){
    console.log(msg + " " + this.name);
}
user = {name : "Chitra"};
sayHello = greet.bind(user,"hello");
sayHello();

let user1 = {
    name : "Tharun",
    sayHi: function(){
        console.log("Outer this:",this.name);
        inner = (()=> console.log("Inner this:"+this.name))
        
        inner();
    }
};
user1.sayHi();
//this can be accessed only within in the function, outer function cannot be accessed , so it will shows error,
//but when we use arrow functions , we can use that, it wont show errors
