//Object Literals

var car = {
    name: "BMW",
    price: 15,
    location: "chennai",
};
console.log(car)
console.clear()

//The value of a property can be primitive, object or a function(called method)

var car = {
    name: "Toyato", //Primitive(strings,numbers)
    features: {
        speed: "high",      // objects or nested objects
        sunroof: false,
    },
    start: function () {
        console.log(`${this.name} is starting`);   // calling function inside objects
    }
}
console.log(car.name);
console.log(car.features.speed);
car.start();
console.clear()

//Objects are mutable and dynamic which means we can change that even after execution , we can modify it anytime.(can be added or remove Properties)

var student = {
    Name: "Tharuniga",
    Age: 20,
};
console.log(student)
student.Name = "Priya";
delete student.Age;         // deleting the property
student['Price'] = 45;      // inserting the property
console.log(student)
console.clear();

//Objects allow grouping related datas and it uses encapsulation, where the data cant be accessed directly only by calling methods
// it shows how data(branchname, amount) and behaviour(deposit,withdraw) are stored together in a single object
var bankaccount = {
    Branchname: "Kattuputhur",
    amount: 5000,
    deposit: function (amount) {
        this.amount += amount,
            console.log(`Deposited : ${amount} , new balance : ${this.amount} `);
    },
    withdraw: function (amount) {
        if (amount <= this.amount) {
            this.amount -= amount,
                console.log(`Withdraw: ${amount}, remaining amount: ${this.amount}`);
        }
    }
}
console.log(bankaccount.deposit(1000));
console.log(bankaccount.withdraw(2000));
console.clear()

//OBJECT CONSTRUCTOR

//Instead of creating the object separately and adding the properties, we can create an empty object and then we can add the properties in it dynamically.
/*OBJECT LITERAL VS OBJECT CONSTRUCTOR
In object literal we write everything at once , in object constructor we create object and then add methods and datas dynamically */

var car = new Object()   //create object
car.brand = "Benz";
car.price = 20;
car.start = function startengine() {
    console.log(`${this.brand} is starting`);
}
console.log(car.brand);
console.log(car.price);
car.start();

//For access and modifying the values, we can use two methods, dot notation and Bracket notation.

car.price = 40;           // dot notation
car["brand"] = "Lambo";   // bracket notation
console.log(car)
console.clear()

// LOOPING 
// for..in  used for getting or looping through each key values 

let userprofile = {
    Name: "Tharun",
    Age: 23,
    Email: "tharuni@gmail.com",
};
for (let key in userprofile) {
    console.log(key, userprofile[key]);
}
// Javascript also provides build-in methods to convert objects into arrays so you can use array methods like forEach, map, filter, etc.
// Object.keys()
console.log(Object.keys(userprofile));
console.log(Object.values(userprofile));
Object.entries(userprofile).forEach(([key, value]) => {  // it shows key value pairs
    console.log(`${key} - ${value}`);
})

//getters and setters method 
let obj = {
    val: 20,
    get double() {
        return this.val * 2;
    },
    set update(newval) {
        this.val = newval
    }
}
console.log(obj.double);
obj.update = 50;
console.log(obj.double);
console.log(obj.val);
console.log("-------------")

//shallow copy   
let student1 = {
    name: "Tharun",
    age: 25,
    marks: {
        maths: 80,
    }
}
const student2 = { ...student1 };
student2.marks.maths = "70";
console.log(student1.marks.maths); // here both student1 and 2 points to the same memory location so changing one will affect both.
student2.age = 40;
console.log(student1.age);
console.log("------------");

//deep copy
let student3 = {
    name: "Tharun",
    age: 25,
    marks: {
        maths: 80,
    }
}
const student4 = structuredClone(student3); // it will create different copy dont save in same memory location for that we use structuredclone which is a js builtin function.
student4.marks.maths = "70";
console.log(student3.marks.maths);

/* Garbage collection is automatic process that cleans unused memory, if something is not used , js will cleans up memory by removing it */

let user = {
    name: "Tharun",
    sayhi() {
        console.log(this.name);
    }
}
user.sayhi();

//constructor 
// it is just a function used to create objects.
function Use(name) {
    this.name = name;
}
let user1 = new Use("Tharun");
let user2 = new Use("Anu");
console.log(user1.name);
console.log(user2.name);

//OBJECT CHAINING(?.)  it checks if this exits, if yes -> continues, if not -> stop without error
let Student = {
    name: "Tharun",
}
console.log(Student?.address?.marks);
//property access obj?.property, obj?.[key]

//Symbol 
let id = Symbol("id")
let chef = {
    [id]: 123, //it will assign the unique value, acts like a unique key
    id: 23,
};

console.log(chef.id);
console.log(chef[id]);

//object->primitive conversion 
//sometimes javascript forces an object to behave like a number or string because of +,-,alert
let user5 = {
    name: "Ammu",
    money: 1000,

    toString() {
        return this.name;
    },
    valueOf() {
        return this.money;
    }
};
console.log(user5 + 500);

//modern way 
let user6 = {
    name: "Suguna",
    money: 50,
    [Symbol.toPrimitive](hint) { // converts object to primitive value, hint tells what type of value javascript wants
        if (hint == "string") {
            return this.name;
        }
        return this.money;
    }
}
alert(user6);
console.log(user6 + 50);