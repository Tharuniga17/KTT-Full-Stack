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
console.log(str.slice(4,6));  //extracts the substring
console.log(str.substr(3,6)); //same like slice but extracts by length
console.log(str.trim());
console.log(str.split(" "));
console.log(str.repeat(2));
console.log(str.at(0))
console.log(str.replace("WORLD","JS"));
console.log("hello hello".replaceAll("hello","hi"));
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

console.log(parseInt("1101011",2).toString(8));
console.log(parseInt("1101011",2).toString(16));
console.log(parseInt("101",8));

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
