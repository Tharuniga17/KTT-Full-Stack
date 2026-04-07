//object properties 
//an object is a collection of properties => a property is usually seen as key-value pair
//every property of an object is not just a key value pair, each property also has three hidden attributes that control how the property behaves
// writable => can change the value of the property(user.name = "Pete")
//enumerable => property show up inloops like for...in or object().keys()?
//configurable => can you delete the property or change its flags later?
// when you create a property , the flags are all true by default, for example,
let user1 = {name : "John"};
{
    // value:"John",
    // writable: true,
    // enumerable : true,
    // configurable : true
}

// object.defineProperty(obj, propertyName,descriptor)
// here obj => the object needs to modify, propertyname => the property to add or modify, descriptor => an object describing calues and flags,

let user = {};
Object.defineProperty(user,"name",{
    value: "John",
    writable : false,
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
    {id: 1, name:"John", date:"26-04-15"},
    {id : 2,name : "Alice",date:"2026-04-07"}
]
console.log(data.sort((a,b) => new Date(a.date) - new Date(b.date)));
