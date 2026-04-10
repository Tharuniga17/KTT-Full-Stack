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
