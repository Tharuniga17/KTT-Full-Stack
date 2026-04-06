// //Function is ablock of code that will perform some task or action

// // pass by value vs pass by reference 

// let x = 10;
// function value(x){
//     x = 20;
// }
// value(x);
// console.log(x);  // pass by value mean when u pass an value like primitive datatypes inside an function , it would just create copy of that and changes that only.
// // it wont change the value present inside the function, so original wont change 

// let car = {make:"honda"};
// function updatecar(c){
//     c.make = "Toyato";
// }

// updatecar(car)
// console.log(car.make) // pass by reference means when u pass an object values into a function , it wont create an copy instead it would save in the same memory location
// // so both properties will point to the same memory location, so original will be changed.

// //---Example with Array

// function array(a){
//     a[0] = 100;
// }
// let nums = [1,2,3]
// array(nums)
// console.log(nums)

// //Recursive Functions 
// // it is a function that will call itself

// function fact(n){
//     if(n <= 1) return 1;
//     return n*fact(n-1);
// }
// console.log(fact(3))

// //Arrow functions
// //it is used in ES6 , it has simpler syntax
// let square = (n) => n *n
// console.log(square(5))
// console.clear()
// //REST VS SPREAD OPERATOR 
// //rest collects multiple elements into an single array, where spread expands the array into individual elements
// function sum(...numbers){
//     return numbers.reduce((a,b)=> a+b,0);
// }
// console.log(sum(1,2,3,4))

// //Spread operator
// let num = [1, 2, 3];
// console.log(...num); // 1 2 3

// //FUNCTION SCOPE 
// //it defines where the variable is accessed whether inside 
// const name1 = "Global"; // global variable

// function greet() {
//   const name1 = "Local"; // local variable
//   console.log(name1);    // Local
// }

// greet();               // Local
// console.log(name1);     // Global

// //IIFE - immediately invoked function expression 
// // it is a function that runs immediately after its defined without needing to call it separately
// (function(){
//     console.log("Hello");
// })
// //whatever present inside it will be private , if many js files have same variable it will be confused all files can access it, but inside iife, it will be private, cant be accessed.
// // avoid global variable conflicts.

// //GENERATOR FUNCTION
// //we can control over the execution , where we can pause, resume the execution where it is left off

// function* numbers(){
//     yield 1;
//     yield 2;  //it is a keyword that is used only inside generator functions
//     yield 3;
// }
// const gen = numbers();   
// console.log(gen.next()); //value : 1, done: false which means the execution is not completed
// console.log(gen.next()); // value : 2, done : false
// console.log(gen.next());
// console.log(gen.next()); // value: undefined, done: true -> execution completed.
// console.clear();
// //DECORATOR 
// //It acts like a wrapper around another function, it takes input as function, add some extra functionality and returns a new function 

// function logger(func){
//     return function(...args){
//         console.log("This time is mine");
//         return func(...args);
//     }
// }
// function add(a,b){
//     return a+b;
// }
// const loggerevent = logger(add);
// console.log(loggerevent(2,3));
// console.clear()
// /*callback function 
// javascript is single-threaded → it can do only one thing at a time
// But in real world:API calls take time,File reading takes time,Timers take time ,So instead of blocking everything, we say:
// “Hey JS, when this finishes… call this function”*/

// function fet(callback){
//     console.log("Fetching data");
//     setTimeout(()=>{
//         console.log("data received");
//         callback();
//     },2000);
// }
// function processdata(){
//     console.log("PRocessing data");
// }
// fet(processdata);
// console.clear();
// //settimeout means runs only once after delay, setinterval runs repeatedly

// //Async function
// function getuser(){
//     return new Promise(resolve =>{  //if a tasks takes longer time, it would make a promise which means it would return the result later
//         setTimeout(()=>{
//             resolve("User data received");
//         },1500);
//     });
// }
// async function fetchdata(){
//     console.log("Loading..");
//     const data = await getuser();  // await pauses the execution , let other codes execute
//     console.log(data);
// }
// fetchdata();


//Function can also act as an object 
function sayHi(){}
sayHi.age = 20;
console.log(sayHi.age);

//we can use built-in properties as well
function add(a,b){}
console.log(add.name);
console.log(add.length);

saHi = function func(n){
    if(n == 0) return;
    console.log(n);
    return func(n-1)
};
saHi(3);


//call   - calls an function immmediately , one by one
let person = {
    name: "Tharun"
};

function greet(age) {
    console.log(this.name + " is " + age);
}

greet.call(person, 21);

//apply -> same as call but allows arrays, the arguments are passed as arrays
person = {
    name: "Tharun"
};

function greet(age) {
    console.log(this.name + " is " + age);
}

greet.apply(person, [21]);

//bind -> it will does not call immediately will returns a new function
// new function is a way to create a function from a string at runtime, it is same as normal function

let sum = new Function('a', 'b', 'return a + b');

console.log(sum(2, 3)); // 5