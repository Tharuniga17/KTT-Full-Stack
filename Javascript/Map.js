/* Map is a collection of key-value pairs, like a mini dictionary 
key -> name tage which identifies a value
value -> the data associated with that key 

Object allows strings and symbols as keys
map allows any type as a key - strings, numbers, objects,functions

  */

//Map creation 
mymap = new Map();
recipemap = new Map([
    ["cucumber",500],
    ["tomato",300],
]);

//to add values to the map use set keyword
map = new Map();
map.set("apple",10);
map.set("banana",20);
map.set("apple",99);
console.log(map)

//for getting the value we use get key 
console.log(map.get("apple"));  //99
console.log(map.get("orange"));  //undefined

//checking and removing values we use has and delete
console.log(map.has("apple"))
map.delete("banana")
console.log(map)
console.log(map.size)


//map with object keys
obj = {name: "john"};
map = new Map();
map.set(obj,123);
console.log(map.get(obj))

map = new Map([
    ["a" , 1],
    ["b",2],
    ["c",3],
]);
for(let [key,value] of map){
    console.log(key, value);
}
for(let key of map.keys()){
    console.log(key);
}

for(let value of map.values()){
    console.log(value)
}

for(let [key,value] of map.entries()){
    console.log(key,value);
}

//set is used to remove duplicates..
myset = new Set();
fruits = new Set(["apple", "banana","apple"]);
console.log(fruits);  //duplicates are ignored automatically 

fruits.add("mango");
fruits.add("apple");
console.log(fruits)
console.log(fruits.has("banana"));

set = new Set(["a","b","c","a"]);
for(let value of set){
    console.log(value);
}
set.forEach((value) => console.log(value));

//remove duplicates
arr = [1,2,2,3,3,3];
unique = new Set(arr);
console.log(unique);

/*map contains both key->value where set only contains values ,
keys will be unique, values can repeat in map -> values will be unique in set
get,set in map, has,add in Set */

/*Map.groupBy() that will lets you group items from an iterable into a map */
numbers = [1,2,3,4,5]
group = Map.groupBy(numbers, n => n%2 == 0 ?'even' : 'odd');
console.log(group);


//group strings by first letter
fruits = ["apple","apricot","banana","blueberry","cherry"]
grouped = Map.groupBy(fruits, fruit => fruit[0]);
console.log(grouped);

fruit = ["a","b","aa","cc"]
grouped = Map.groupBy(fruit, fruit => fruit[0]);
console.log(grouped)


//getOrInsert means if the value for the key present means it will return otherwise it will return the defualt value like 0 
// map = new Map()
// map.set("Apple",10);
// map.getOrInsert("Banana",0);
// map.getOrInsert("Apple",0);
// console.log(map);

//weakMap/weakset  => memory-safe storage for objects => it have weak reference
//map will have strong reference even if we put  null the user wont be removed completely but in weak map it will be removed completely 
user1 = {name: "Arun"};
user2 = {name : "Bala"};

logindata = new WeakMap();
logindata.set(user1,"Logged in");
logindata.set(user2,"logged out");
console.log(logindata.get(user1))


//destructuring assignment
//it lets u extract values from arrays/objects into variables easily
arr = ["Tharun",20]
name1 = arr[0];   // these are normal
age = arr[1];

arr = ["Tharun",20]
[name1,age] = arr;
console.log(name1);
console.log(age)

var user = {
    name2 : "Tharuniga",
    age : 20,
}
console.log(user.name2);
console.log(user.age);

var {name2,age} = user;
console.log(name2,age);