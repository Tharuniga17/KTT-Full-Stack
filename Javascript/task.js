//TASK 1 
let laptop = {
    brand : "Dell",
    price : 15,
    color : "red",
    amount : 5000,
    upgradeprice : function(){
        this.amount += 500;
        return this.amount;
    },
    specs : {
        ram : "16gb",
        storage : 512,
    }
}
console.log(laptop);
delete laptop.color;
console.log(laptop);
laptop["processor"] = "Intel";
console.log(laptop);
console.log("--------");

//TASK 2 
function Mobile(name,price){
    this.name = name;
    this.price = price;
    this.features = {
        camera : "good",
        battery : "bad"
    }
    this.discount = function(amount){
        this.price -= amount;
        return this.price;
    }
}

let mobile1 = new Mobile("iphone",40000);
let mobile2 = new Mobile("samsung",40000);
mobile1.discount(5000);
console.log(mobile1);
console.log(mobile2);
console.log(mobile1?.features?.battery);
console.log("----------");

//TASK 3 
let person = {
    firstname : "Tharuniga",
    lastname : "M",
    age : 25,

    get full(){
        return this.firstname + " " + this.lastname;
    },
    set newage(newval){
        this.age = newval
    }
}
console.log(person.full);
person.newage = 20;
console.log(person.age);

//TASK 4 
//shallow copy
let employee1 = {
    Name : "Chitra",
    salary : {
        CTC : "4lpa",
        stipend : "10k",
    }

}
let employee2 = {...employee1};
employee2.salary.CTC = "3lpa";
employee2.name = "Nimmi";
console.log(employee1)

//deep copy 
let e1 = {
    Name : "Chitra",
    salary : {
        CTC : "4lpa",
        stipend : "10k",
    }

}
let e2 = structuredClone(e1);
e2.salary.CTC = "3lpa";
e2.name = "Nimmi";
console.log(e1);
console.clear();

//TASK 5 
let wallet = {
    name : "Kannamal",
    balance : 100,

    toString(){
        return this.name;
    },
    valueOf(){
        return this.balance;
    }
}
// alert(wallet);
console.log(wallet + 500);
console.clear();

let purse = {
    name : "Priya",
    balance : 300,
    [Symbol.toPrimitive](hint){
        if(hint == "string"){
            return this.name;
        }
        return this.balance;
    }
}
// alert(purse);
console.log(purse + 1000);
console.clear()

//RECURSIVE FUNCTION 
function fact(n){
    if(n <= 1){
        return 1;
    }
    return n * fact(n-1);
}
console.log(fact(5));

function sum(n){
    if(n <= 1){
        return 1;
    }
    return n + sum(n-1);
}
console.log(sum(3));

//arrow function 
let cube = (n) => n*n*n;
console.log(cube(3));

(function(){
    console.log("Executing");
})();

//Rest & spread operator 
function average(...nums){
    if(nums.length == 0){
        return 0;
    }
    let count = 0
    for(let num of nums){
        count += num
    }
    return count/nums.length;
}
console.log(average(1,2,3,4))

let nums = [1,2,3,4];
console.log(...nums);
console.clear()

// // let age = prompt("Enter ur age");
// // age = Number(age)
// let result = (age >= 18) ? "Eligible" : "not eligible";
// console.log(result);


str = "Tharun";
console.log(str.toUpperCase());

let number = 123.456;
console.log(number.toFixed(2));

char = "Hello World";
console.log(char.includes("World"));

let bool = Boolean("")
console.log(bool)

num = 12345;
console.log(Number(num.toString().split("").reverse().join("")));

//maximum
num = [3,45,7,89,12]
console.log(Math.max(...num));

//minimum
num = [3,45,7,89,12];
console.log(Math.min(...num))

//nearest integer
num = 5.6789
console.log(Math.ceil(num));

//random number
random = Math.floor(Math.random() * 100) + 1;
console.log(random);

str = "1234"
console.log(Number(str));

//check prime number
function prime(num){
    if(num <= 1){
        return false;
    }
    else if(num == 2){
        return true;
    }
    for(let i = 2;i <= Math.sqrt(num);i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}
num = 3;
if(prime(num)){
    console.log("Prime");
}
else{
    console.log("not prime");
}

//string
str = "konguengineeringcollege";
console.log(str.length);
console.log(str.slice(0,5));
console.log(str.replace("kongu","bannari"));
arr = "Apple,Banana,Mango";
console.log(arr.split(","));

str = "aeiouAEIOU";
newstr = "world"
count = 0
for(let i= 0;i<newstr.length;i++){
    if(str.includes(newstr[i])){
        count+=1;
    }
}
console.log(count)

arr = [1,2,3,4,5]
console.log(arr[arr.length - 1]);
arr.unshift(10)
console.log(arr);
arr.shift();
console.log(arr)
arr.shift();
console.log(arr)

arr = [1,2,3,4]
newarr = arr.map( i => i*2);
console.log(newarr);

arr = [5,2,4,3]
newarr = arr.filter(i => i > 3);
console.log(newarr);

arr = [2,4,6,8]
newarr = arr.reduce((a,b) => a+b,0);
console.log(newarr);

arr = [10,2,33]
arr.sort((a,b)=> b-a);
console.log(arr)

console.log(+"123");

console.log(-"123");

college = ["A","B","C","D"]
console.log(college.splice(1,2)); 
let arra = ["one","two","three"];
console.log(arra.join(","));

arr = [1,2,3,4,5]
arr.copyWithin(3,0,2);
console.log(arr);


fruits = ["A","B","C","D"];
fruits.copyWithin(0,1);
console.log(fruits);