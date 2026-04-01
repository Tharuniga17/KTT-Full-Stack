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


let age = prompt("Enter ur age");
age = Number(age)
let result = (age >= 18) ? "Eligible" : "not eligible";
console.log(result);
