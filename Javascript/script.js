if(true){
    msg = "WElcome to joes"
}
console.log(msg)
var a = 25 
console.log(a)
var a = 45
console.log(a)

b = 35 
console.log(b)

let student = {"name":"tharun","age" : 24};
console.table(student)
console.log(student.name)
student.name = "chitra"
console.table(student)

var a = true;
console.log(typeof(a))

var s1 = Symbol() //kjdiweufhmsd
console.log(s1)

var s2 = Symbol() //asdbwuedbwe
console.log(s2)

console.log(s1 == s2)

var d = new Date();
console.log(d)

//TYPE CONVERSION
var b = 20;
console.log(b, typeof(b))
b = String(b)
console.log(b, typeof(b))

var b = [1,2,3,4];
console.log(b, typeof(b))
b = b.toString();
console.log(b, typeof(b))

a = "125"
console.log(a,typeof a)
a = parseInt(a)
console.log(a, typeof a)

//MATH FUNCTIONS
let c;
c = Math.PI;
console.log(c)
c = Math.E;
console.log(c)
c = Math.round(5.2)
console.log(c)
c = Math.floor(5.9)

c = Math.ceil(5.3)
c = Math.abs(-3)
c = Math.trunc(2.44)
c = Math.random();
c = Math.floor((Math.random()*50+1));
c = Math.sin(45)
c = Math.cos(25)
console.log(c)


const user = {name:"Tharun"};
console.log(user.name);
user.city ??= 'Salem'
console.table(user);
let names = ["ram","sam","ravi","sundar","sara","tara"]
console.log(names[2])

let table = 5,i = 1,limit = 5;
do{
    console.log(table+ " X "+ i +" = "+(table*i));
    i++;
}while(i<=limit);


//ARROW FUNCTIONS
let square = n => n*n
console.log(square(2))

let double = n => n*2 
console.log(double(3))

let check = n =>{
    if(n>=1){
        console.log("pos");
    }
    else{
        console.log("nrg");
    }
}
console.log(check(-5))

let sum = (a,b) =>{
    return a+b;
}
console.log(sum(2,3))

a = 5;
b = "10";
su = a + b;
console.log(su);


//OBJECTS
let car = {
    name : 'Benz',
    brand : 'bmw',
    engine : 'petrol',
    price : 15,
    onroadprice(price){
        return this.price + 2;
    }

}
console.log(car.name);
delete car.engine 
car['Model year'] = 2024;
console.log(car.onroadprice(11))
console.clear();

//IN OPERATOR
let user1 = {
    nam  : 'Tharun',
    age : 23,
};
for(key in user1){
    console.log(key + '-' + user1[key])
}
