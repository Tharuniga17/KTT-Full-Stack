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
map = new Map()
map.set("Apple",10);
map.getOrInsert("Banana",0);
map.getOrInsert("Apple",0);
console.log(map);

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

//Date object is used to store date and time
now = new Date();
console.log(now);

now = new Date(0);
console.log(now)

//using a data string 
date = new Date("2017-01-26");
console.log(date);

date1 = new Date(2011, 1, 20, 2, 3, 4, 567);
console.log(date1);
//year month date hour minute seconds milliseconds


//this is for accessing the date components
now = new Date();
console.log("Year",now.getFullYear());
console.log("Month:",now.getMonth());
console.log("Month:",now.getDate());
console.log("Day:",now.getDay());
console.log("Hours:",now.getHours());
console.log("Minutes:",now.getMinutes());
console.log("Seconds",now.getSeconds());
console.log("Milliseconds:",now.getMilliseconds());
console.log("UTC Year:",now.getUTCFullYear());
console.log("UTC Hours:",now.getUTCHours());

//setting date components
now = new Date(2011, 1, 20, 2, 3, 4, 567)
news = now.setFullYear("2024");
news = now.setMonth("04")
news = now.setDate("24");
news = now.setHours("5");
news = now.setMinutes("23");
news = now.setSeconds("20");
console.log(now)

//if we gave wrong date it would just move to or add to next month
date = new Date(2013,0,33);
console.log(date);

date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);
console.log(date.toString()); //it wll convert to local time

//to get into milliseconds
ms = Date.parse('2012-01-26T13:51:50.417-07:00')
console.log(ms)

//setFullyear to ms 
now = new Date();
date = now.setFullYear("2023");
console.log(date);

now = new Date();
console.log(now.toLocaleString());  //shows a localized string format

start = new Date();
end = new Date();
console.log(end - start);


//JSON - Java Script Object Notation is a text based data format to store and exchange the data 
//it is language independent , where it will support many languages like pythin,java,ruby,php
//json is data-only , it cannot store functions, symbols and undefined values, it is strict compared to js objects 
//it must be double quoted, no NaN, infinity or zeros , functions are not allowed,comments also

/*JSON is a global object in javascript, cannot create it with new JSON()    */

//JSON.stringify - it will convert a js object or value into a JSON string which can be stored and sent over a network 

user = {
    name : "user",
    age : 30,
    isAdmin : false,
    courses : ["html","css","js"],
    spouse : null,
};

json = JSON.stringify(user);
console.log(json);

json = JSON.stringify(user,null,1); //it will add space each line
console.log(json);

//JSON.parse(text, reviver)
//it will convert json string back into javascript object 
json = '{"name":"John","age":30,"isAdmin":false}';
user = JSON.parse(json)
console.log(user)

//using a reviver function- it will check for every key/value in the object , you can filter or transform values while parsing
json = '{"name":"John","age":"30"}';
user = JSON.parse(json,(key,value) => {
    if(key === "age") return Number(value);
    return value;
});
console.log(user);


const room = {
    name : "217",
    room :{
        owner : "Tharuniga",
        newcomer : "ann",
    }
};
jsonstr = JSON.stringify(room,null,2); //these are nested objects
console.log(jsonstr);

//we use stringify to convert object into string to send data to server and store data in browser,then sharing data between two systems
//everything will happen using string only

//we use parse to convert the string into object only after receiving the data and use it in our system

//here whenever we call JSON.stringify() it would automatically checks whethe the object have toJSON() method
//if it presents that uses that methods return value instead of the object


