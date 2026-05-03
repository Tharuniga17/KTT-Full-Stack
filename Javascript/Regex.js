regex = /^\d/;
//\d -> atleast one digit everywhere
// ^\d -> starts with a digit
// \d$ -> ends with a digit
// ^\d+$ -> all digits

a = "64tsp";
console.log(/^\d+/.test(a));

//global -> it will find all matches
text = "cat cat cat";
console.log(text.match(/cat/g));   //[ 'cat', 'cat', 'cat' ]

//case-insensitive -> it ignores uppercase and lowercase
text = "cAt CAT Cat cat";
console.log(text.match(/cat/i)); //it returns only the first match

//multiline -> it would check line by line 
text = "hello\nworld\nhello";
console.log(text.match(/^hello/gm)); //it will works line by line and prints output where it is present

//unicode mode
//it supports unicode characters only ,
text = "𝌆A"
console.log(/\u{1D306}/u.test(text));

//sticky flag
//it forces to match exactly at lastIndex only, it will not skip forward like g

regex = /a/y;
console.log(regex.exec("abc derf")); //["a"]
//next it will check at index 1 
console.log(regex.exec("abc def")); //it will print null

// \p{L} => unicode property -> it matches any letter from any language
// /\p{L}/u 
text = "Hello नमस्ते 你好 مرحبا 123 ";
console.log(text.match(/\p{L}+/gu));

console.log(text.match(/\p{N}+/gu)); //matches only numbers

console.log(text.match(/\p{Z}+/gu));  //for matching types of spaces

console.log(text.match(/\p{Lu}+/gu));  //getting uppercase letters only

console.log(text.match(/\p{Ll}+/gu)); 

//Numbers unicode and ascii
text = "Order ५ items and 3 apples";
console.log(text.match(/\p{N}+/gu)); //matches all language numbers

text = "ABC αβγ АБВ";
console.log(text.match(/\p{Script=Latin}+/gu)); //only latin letters will be printed

//word boundary
text = "cat catalog"
console.log(text.match(/\bcat\b/g)); //prints cat -> extracts word match

//Greedy vs Lazy which is maximum match and minimum match 
text = "a123b456b";
console.log(text.match(/a.*b/)) //where it prints all the numbers between a and b
console.log(text.match(/a.*?b/)) //where it prints the minimum match upto center b

//Groups in regex
text = "abab"
console.log(text.match(/(ab)+/)) //it only prints the first group

console.log("2026-04-18".match(/(\d{4})-(\d{2})-(\d{2})/))

//Backreference -> it will refers to previous captured groups
text = "hello hello"
console.log(text.match(/(\w+)\s\1/)) //-> it checks for same word again

text = "12-12-29"
console.log(text.match(/(\d\d)-\1/)) //it will checks for same two digits again 

//alternation(OR)
text = "dog and cat"
console.log(text.match(/cat|dog/g));

//match only if something or that value comes next 
text = "100$ 200 300$"
console.log(text.match(/\b\d+\b(?!\$)/g))

// text = "$500 300 $400"
// console.log(text.match(/(?<+\$)\d+/g)); //it matches the number preceded by $

//Catastrophic Backtracking
console.log(/^a+$/.test("aaaaaaaaaaaaaaaaab")); //it will show error because too many combinations and shows performance issue

//test()-> boolean check checks if match exists
regex = /\$\d+/g;
str  = "Total price is $500 $200"
console.log(regex.test(str))

//exec() -> will provide detailed match info
console.log(regex.exec(str))

//match() => easy match 
console.log(str.match(regex));

//replace() -> for replacing matched text 
console.log(str.replace(regex,"$999"));

console.log(str.search(regex));

//split using regex
console.log(str.split(regex));

console.log("apple,banana;orange".split(/[,;]/))