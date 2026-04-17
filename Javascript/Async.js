//callbacks -> it is a function passed into another function as an argument and that will be executed later.
//it will run a function that runs after something finishes
//javascript is asynchronous, some tasks like api calls, file loading and timers will take some time, at that time js doesnt wait , at that time we use callbacks, it tells after this task finishes, do this



//synchronous callback
function greet(callback,name){
    console.log(name);
    callback();
}
function saybye(){
    console.log("bye!");
}
greet(saybye,"Tharun");

//callback hell -> when the functions are nested , it would create some errors, and hard to debug

//Asunchronous callback
//it is a function that runs later, not immediately, it will wait for something like time,date and event

//timer -> we use async callback
console.log("Start");
setTimeout(()=>{
    console.log("async callback");
},1000)

//call stack -> here javascript keeps track of what function is currently running

//web api -> features provided by the browser that will handle the async tasks outside the JS engine

//Callback Queue -> A queue where completed async callbacks wait for execution

//event loop means it will continuously check whether call stack is empty, f yes, take next task from queue -> it will decide when to run async code

//in callbacks there is an error of callback hell, which is hard to read, to overcome that javascript introduced promises

//PROMISES - it is a object that will represent a value it will tell, that will be available now, later or never, it is like i promise, i will give u the result later
/* it contains three states, pending, fulfilled and rejected  
pending -> stil processing, fulfilled -> success, rejected -> error  */

//promise creating,
promise = new Promise(function(resolve, reject){
});  // this function is called executor(a function that runs immediately when promise is created)


//Resolve
promise = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        resolve("Success!");
    },1000);
});
promise.then(res =>{    //then will run whenever resolve runs , it indicates success, stores that value and print it
    console.log(res);
});

//Reject 
promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Error occured");
    },200);
});
promise.catch(error =>{
    console.log(error);
})

//then is used to handle results, when resolve is used, catch runs when reject is used
//.finally will run always
//microtask queue that will run immediately, after current code finishes, it includes, .then(), .catch(), .finally(), queueMicrotask()
// it performs only high priority tasks, before anyother waiting tasks,
//we can use promise only resolve

promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("data received");
    },1000);
});
promise.then(res => console.log(res))
       .catch(err => console.log(err))
       .finally(()=>console.log("Done"));


function divide(a,b){
    if(b === 0){
        throw new Error("cannot divide by zero");
    }
    return a/b;
}
console.log(divide(2,3));

//promise.all -> it will wait for all promises to complete
p1 = Promise.resolve(1);
p2 = Promise.resolve(2);
p3 = Promise.resolve(3);

Promise.all([p1,p2,p3]).then(res => console.log(res));
//if anyone fails here, whole thing will fail

//promise.allSettled() -> it will wait for all promises(success or failure)
p1 = Promise.resolve(1);
p2 = Promise.reject("error");
Promise.allSettled([p1,p2]).then(res => console.log(res)); //it will show the status 

//promise.race() -> it will return the first promise that finishes
p1 = new Promise(res =>
    setTimeout(()=> res("A")
,1000));
p2 = new Promise(res =>
    setTimeout(()=> res("B"),
500));

Promise.race([p1,p2]).then(res => console.log(res));

//Promise.any() -> returns first successful promise
p1 = Promise.reject("error1");
p2 = Promise.resolve("success !!");
p3 = Promise.reject("error2")
Promise.any([p1,p2,p3]).then(res => console.log(res));

//since callback hell is not possible so we use promise chaining, for connecting multiple async steps one after another, here we use then

//it is promise chaining, each step  here depends on previous result

fetch("https://api.example.com/user")
  .then(res => res.json())
  .then(user => fetch(`https://api.example.com/posts/${user.id}`))
  .then(res => res.json())
  .then(posts => console.log(posts))
  .catch(err => console.log(err));


//promisification -> converting callback-based function -> promise based function.
function loadscript(src){
    return new Promise((resolve, reject) => {
        loadScript(src, function(err,script){
            if(err) reject(err);
            else resolve(script);
        });
    });
}


//Micro tasks
//javascript will run code line by line, but sometimes we have promises, timers and api calls which wont run immediately where they run later
//so js needs a system to decide what should run first after the current code finishes, that system is called queues.

//two important queues are,
/*Microtask queue(promises)  -> then, catch, finally -> it is small queued task that runs after current code finishes.
Macrotask queue  -> setTimeout, setInterval, DOM events
Microtasks will always run before macrotasks  -> .then will goes to microtask queue, once finished goes to macrotask
*/

//before async / await exist, we handpromises like this
// fetch(url).then(res => res.json()).then(data => console.log(data));
//it is messy,hard to read 
//so we makes async code look like a normal code
async function f(){
    return 1;
}//it is a function that will always return a promise
f().then(console.log);

//await => wait until promise finishes and then give me result

async function f(){
    promise = new Promise(resolve =>
        setTimeout(()=> resolve("Done"),1000)
    );
    result = await promise;
    console.log(result);
}
f();

async function f(){
    user = await fetch("/user");
    data = await user.json();
}  //multiple awaits runs step by step like normal code

// a = fetch(url1);
// b = fetch(url2);
// [res1,res2] = await Promise.all([a,b]);

//imagine building a big app, which have login logic,shopping cart and payment, if everything is in one file, it would be messy, hard to maintain and debug
// so we split it into modules(multiples files)
//it is just a javascript file , where each file is independent -> sayHi.js, main.js like this
// export => send the code out
//import => bring the code in 
