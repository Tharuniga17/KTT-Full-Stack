/* Primitive vs objects
primitive data types stores single values,lightweight in memory,it cant use methods but posible by using temporary wrapper
eg.. number,string,boolean,bigint,symbol,null,undefined

Multiple values as properties
{} (objects), functions, arrays, dates, etc.
Methods are properties of object
Memory Heavier


"Hello" (primitive)
   |
   v
temporary String object created
   |
   v
toUpperCase() runs → produces "HELLO" (primitive)
   |
   v
temporary object destroyed
   |
   v
"HELLO" returned     this is how primitive data types access the methods */
var str = "hello";
console.log(str.toUpperCase());

let n = 1.23456;
console.log(n.toFixed(2)); //same happens here also

let num = Number("123");
let char = String(34);
let bool = Boolean(0);
console.log(num);
console.log(char);
console.log(bool);


//STRING METHODS

var str = "hello WORLD";
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(2));   // l
console.log(str.charCodeAt(1));  //gives ascii number of that character
console.log(str.indexOf("o"));
console.log(str.lastIndexOf("l"));  // last occurence
console.log(str.includes("WORD"));  // checks if it prsents
console.log(str.startsWith("el"));  // checks it crtly starts with that if means true
console.log(str.endsWith("WORLD"));
console.log(str.slice(4, 6));  //extracts the substring
console.log(str.substr(3, 6)); //same like slice but extracts by length
console.log(str.trim());
console.log(str.split(" "));
console.log(str.repeat(2));
console.log(str.at(0))
console.log(str.replace("WORLD", "JS"));
console.log("hello hello".replaceAll("hello", "hi"));
console.log("Hi ".concat(str))
console.log("---------------")

//NUMBERS 
let number = 123.456;
console.log(number.toFixed(2));
console.log(number.toPrecision(4));
console.log(number.toString())
console.log(number.valueOf());//returns the number primitive format
console.log(number.toExponential(2))
console.log(Number.isInteger(number));
console.log(Number.isNaN(number));
console.log(Number.isFinite(number));
console.log(Number("123"));
console.log(Number("abc"));
console.log(Number(true));

console.log(parseInt("123"))  //only extracts the integer part
console.log(parseInt("123.3434"))

console.log(parseFloat("123.45")); // converts string to floating point

console.log(String(123));
console.log(String(true));
console.log(String(undefined));

console.log(Boolean(""))

console.log(parseInt("1101011", 2).toString(8));
console.log(parseInt("1101011", 2).toString(16));
console.log(parseInt("101", 8));

//unary operator 
console.log(+"123"); //quick conversion of string to number
console.log(-"123");

let a = 0;
console.log(Boolean(a));
console.log(!!a);

let big = 12345678901234567890n;
console.log(big.toString())


let b = 1_000_000;
console.log(b);

let nbr = 255;
nbr.toString(16);
nbr.toString(8);
nbr.toString(2);

console.log("a" > "Z"); //ascii character of a is greater that Z
console.log("abc" > "ab");
console.log("Z".codePointAt(0)); //gives numberic value of that 
console.log(String.fromCodePoint(90)); //returns character of that value 


//Arrays 
//it stores data in key-value pairs because we need ordered collection
let fruits = ["Apple", "Orange", "Plum"];

let arr = new Array("Apple", "Orange"); //creates an array with list of values 
let arr1 = new Array(3); //creates empty array with length 3


// alert(fruits[fruits.lenght - 1]);
// alert(fruits.at(-1));

fruits[2] = "Banana";
// alert(fruits[2]);
//array can act as stack and queue  
let stack = ["A", "B"];   //LIFOtell
stack.push("c");
// alert(stack);

//Queue    FIFO
let queue = ["A", "B"];
// queue.push("C")
// alert(queue.shift())

let array = "one, two, three";
console.log(array.split(", "));  //only for strings
//finding elements 
console.log(fruits.indexOf("Apple"))

let college = ["kec", "kct", "bit"];
college.push("psg")
console.log(college)
college.shift()
console.log(college)
college.unshift("Strawberry") //to add at the beginning
console.log(college)
college.splice(1, 2) // remove items
college.splice(1, 2, "srm", "sns");
console.log(college)
let arra = ["one", "two", "three"];
console.log(arra.join(","));



// let fruits = [
//    {name: "Apple"}
// ];
// let copy = JSON.parse(JSON.stringify(fruits));
// copy[0].name = "Banana";
// console.log(fruits[0].name);


let vegi = ["Apple", "Banana", "Mango"];
vegi.forEach((item, index) => {
   console.log(`${index + 1}. ${item}`); //do something for each item
})
let upper = vegi.map(i => i.toUpperCase());
console.log(upper);

let lengths = vegi.map(f => f.length);
console.log(lengths); //it creates new array by transofrming each element

let result = vegi.filter(f => f.includes("a"));
console.log(result) //it will return elements  that satisfy a given condition

let total = vegi.reduce((acc, f) => acc + f.length, 0);
console.log(total); //combine everything into one value/single value 

let a1 = ["1", "2", "3"];
let a2 = ["4", "5"]
let combine = a1.concat(a2);
console.log(combine) //combine two arrays 

let combined = [...a1, ...a2];
console.log(combined);

a = ["A"]
b = ["B"]
c = ["C"]
let res = a.concat(b, c);
console.log(res)

//Searching elements
//FIND 
let newfruit = ["Apple", "Banana", "Grapes"];
let ans = newfruit.find(f => f.startsWith("B"));
console.log(ans); //if not found means undefined

//findIndex 
let newfruit1 = ["Apple", "Banana", "Grapes"];
let ans1 = newfruit1.findIndex(f => f.startsWith("B")); //to get the position of matching item 
console.log(ans1);
//includes vs find 
//includes does not accept function just tell present or not, find will accept the function


let food = ["idly", "dosa"];
let sorted = food.sort();
console.log(sorted); //here original also changing so we can use tosorted()
food.reverse();
console.log(food);

var food1 = ["Briyani", "rice", "mor"];
var sorting = food1.toSorted();
console.log(sorting);
console.log(food1)
console.clear();
food1 = ["Briyani", "rice", "mor"];
sorting = food1.toReversed();
console.log(sorting);
console.log(food1)

const board = [
   ["R", "N", "B", "Q", "K", "B", "N", "R"],
   ["P", "P", "P", "P", "P", "P", "P", "P"],
   ["", "", "", "", "", "", "", ""],
];
console.log(board[0][2]);

fruits = ["apple", "B", "C"];
fruits.fill("X");  //it will replace all elements of the array with a given value
console.log(fruits);

fruits = ["A", "B", "C"];
fruits.fill("X", 0, 2);
console.log(fruits);

arr = [1, [2, 3]];
newarr = arr.flat(); //it will remove the brackets convert nested arrays into single array
console.log(newarr);

//copywithin - it copies part of the array and paste it somewhere inside the same array 

arr = [1, 2, 3, 4, 5]
arr.copyWithin(3, 0, 2);
console.log(arr);

fruits = ["A", "B", "C", "D"];
fruits.copyWithin(0, 1);
console.log(fruits);

arr = ["a b", "c d"];
newarr = arr.flatMap(i => i.split(" ")); //it will splits the sentence and combines both
console.log(newarr)

//with is used to replace an element without changing or modifying the original array 

arr = [1, 2, 3, 4]
newarr = arr.with(1, 5); //original array is not changed
console.log(newarr);

arr = [1, 2, 3];
for (let x of arr) {
   console.log(x);
}

arr = [4, 5, 6]
it = arr[Symbol.iterator]();
console.log(it.next());
console.log(it.next());

str = "Hello"
for (let ch of str) {
   console.log(ch);
}

arr = [1, 2, 2, 2, 3, 4]
let set = new Set(arr)
for (let i of set) {
   console.log(i);
}

set.add(5);
console.log(set)

arr = [1, 2, 2, 3, 3]
unique = [...new Set(arr)];
console.log(unique)

obj = { name: "Tharun", age: 20 };
let map = new Map(Object.entries(obj));
console.log(map);

obj = Object.fromEntries(map);
console.log(obj);
