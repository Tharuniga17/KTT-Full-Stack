//object properties 
//an object is a collection of properties => a property is usually seen as key-value pair
//every property of an object is not just a key value pair, each property also has three hidden attributes that control how the property behaves
// writable => can change the value of the property(user.name = "Pete")
//enumerable => property show up inloops like for...in or object().keys()?
//configurable => can you delete the property or change its flags later?
// when you create a property , the flags are all true by default, for example,
let user1 = { name: "John" };
{
    // value:"John",
    // writable: true,
    // enumerable : true,
    // configurable : true
}

// object.defineProperty(obj, propertyName,descriptor)
// here obj => the object needs to modify, propertyname => the property to add or modify, descriptor => an object describing calues and flags,

let user = {};
Object.defineProperty(user, "name", {
    value: "John",
    writable: false,
    enumerable: true,
    configurable: false
})
user1 = { name: "John", age: 30 };

for (var key in user) {
    console.log(key);
}

user1[key] = "Tharun";  // key is "age" (last iterated property)
console.log(key, user1[key]);
// Output:
// age Tharun


let data = [
    { id: 1, name: "John", date: "26-04-15" },
    { id: 2, name: "Alice", date: "2026-04-07" }
]
console.log(data.sort((a, b) => new Date(a.date) - new Date(b.date)));

//Getters and Setters
//Getter - special method that reads a property, setter - methods that changes a property 
//it is used to control access to object properties, and also to protect data from getting wrong values.

person = {
    firstname: "Tharun",
    lastname: "Chitra",

    get fullname() {
        return this.firstname + " " + this.lastname;
    },

    set fullname(name) {
        newname = name.split(" ");
        this.firstname = newname[0];
        this.lastname = newname[1];
    }
};
console.log(person.fullname);

person.fullname = "kannamal m";
console.log(person.firstname);
console.log(person.lastname);

//in real world , i should not have negative age, we can enforce that using a setter
class user3 {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0 || value > 150) {
            console.log("Invalid age");
        } else {
            debugger;
            this._age = value;
        }
    }
}
user = new user3("Tharuniga", 25);
user.age = -5;
user.age = 30;
console.log(user.age);

//OBJECT PROTOTYPES
user = {
    name : "Tharun",
    greet(){
        console.log("Hello");
    }
};
admin = {
    name : "Ajai"
};
guest = {
    name : "vimal"
};
//here admin and guest dont have greet() so we cannot copy here instead we use inheritance,
//means one object can use properties and methods of another object --> every object has a hidden link that is [[prototype]] -->
//we connect like, admin.__proto__ = user; now admin and greet can access hello,
user = {
    name : "Tharuniga",
    age : 20,
    greet(){
        console.log("Hello");
    }
};
admin = {
    __proto__ : user,
};
admin.greet(); //here __proto__ automatically links to the parent object

//protoype means every object will have an hidden connection to another object, called prototype.
//that connection is called backup object -> if something is missing javascript will checks the backup 
user = {
    name : "Tharun",
    greet(){
        console.log(this.name);
    }
};
admin = {
    name : "Chitra",
    __proto__ : user,
};
admin.greet();  //here this not get the name of tharun istead it will get chitra because we called it

obj = {};
Object.defineProperty(obj, "name",{
    value : "Tharun",
    writable : false,
    enumerable : true,
    configurable : false
});

obj.name = "vimal";
console.log(obj)

console.log(Object.getOwnPropertyDescriptor(obj, "name"));

function student(name){
    this.name = name;
}
student.prototype.greet = function(){
    console.log("hello" + this.name);
};
user = new student("Tharun");
user.greet();

//when javascript tries to find a property, it will search step by step in a chain of objects
//if i declare arr.push(4)=> where does push comes from? => javascript gives that automatically, they are linked to something called Array.prototype
//Array.prototype contains built-in function like push(),pop(),map(),filter()
//Array.prototype means contains all array methods, like a toolbox for all arrays

//if i write arr.push(4)=> js will take it as Array.prototype.push(4) where it is the actual prototype location

//String.prototype will contain shared object of all string methods like touppercase, slice,includes
//strings are primitive they cant use objects, but js temporarily converts to object and use these methods and return normal string

//For object.property includes obj.toString(),valueof

animal = {
    eats : true
};
dog = {}
Object.setPrototypeOf(dog,animal);
console.log(dog.eats);

console.log(Object.getOwnPropertyNames(Array.prototype));

