// in javascript error happen when something goes wrong, varaible not defined, wrong input , server fails, and function crash, without handling the program will crash
/* to prevent script crash, we catch the error, and handle it safely and continue the program 
the basic syntax,
try{

}catch(err){

}
*/

try{
    console.log("A");
    console.log("B");
}catch(err){
    console.log("Error");
}

try{
    console.log("A");
    x;
    console.log("B");
}catch(err){
    console.log("handled");
}
 //try-catch works for synchronous operations not asynchronous, it will catch errors that happens right inside the same execution
 console.log("A");
 console.log("B");
 //synchronous code will runs immediately, line by line, asynchronous will take time

//  try{ //enter try block
//     setTimeout(()=>{  // but it schedules later
//         x;
//     },1000);  // try finishes, if it runs after one second it throws error
//  }catch(err){
//     console.log("wont work");
//  }

setTimeout(() => {
  try {
    x;
  } catch (err) {
    console.log("caught");
  }
}, 1000);

//when error happens, catch(err), err will contain property like name, message and stack means error type, description and where error happened.
try{
    x;
}catch(err){
    console.log(err.name);
    console.log(err.message);
}

//error in javascript -> 
//Reference error - > variable not found
// console.log(x);

//Type Error -> operation on wrong type

try{
    num = 10;
    num.toUpperCase();
}catch(err){
    console.log(err.name);
    console.log(err.message);
}

//syntax error-> code structure is wrong like syntax
//range error -  value out of allowed range
try{
    arr = new Array(-1);
}catch(err){
    console.log(err.name);
    console.log(err.message); //invalid array length
}


//URIerror happens when you try to encode/decode an url , when the format is invalid
try{
    decodeURIComponent("%");
}catch(err){
    console.log(err.name);
    console.log(err.message);
}

//custom error -> manually stoping the program when you get to know something is wrong, so stops execution.
//javascript only throws error for syntax issues, type issues,but in real apps, we need to validate user input, api response and business rules
let balance  = 1000;
let w = 2000;
try{
    if(w > balance){
    throw new Error("Insufficient balance");
    }
    console.log("Tanscarion sucess");
}catch(err){
    console.log("Handles:",err.message);
}


// let age = "twenty";
// if(typeof age !== "number"){
//     throw new TypeError("Age must be number");
// }

//finally -> code that always runs, whether error happens or not, it will run
try{
    console.log("try");
}catch{
    console.log("catch");
}finally{
    console.log("finally");
}

try{
    console.log("try");
    x;
}catch{
    console.log("catch");
}finally{
    console.log("finally")
}
//finally is used for cleanup / closing/ finishing work
//close databse connection, stop timer, release memory

loading = true;
try{
    console.log("Fetching data");
    throw new Error("API failed");
}catch{
    console.log("error occured");
}
finally{
    loading = false;
    console.log("loading stopeed");
}

function test(){
    try{
        return "try return";
    }finally{
        console.log("finally runs");
    }
}
console.log(test());

// window.onerror = function(message,url,line,col,error){
//     console.log(`Error: ${message}`);
// }
// function test(){
//     badFunction();
// }
// test();

class validationError extends Error{
    constructor(message){
        this.message = message;
    }
}

function signup(email){
    if(!email.includes("@")){
        throw new ValidationError("Invalid email format");
    }    
}

