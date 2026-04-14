import { sayHi } from "./Export.js";

console.log(sayHi("Tharun"));

//for importing all at once, 

/*import * as say from "./say.js";
  say.sayHi();
  say.sayBye();
     */


  // default export is used when file has one main thing it will load a module only when needed
/*export default class user{
constructor(name){
this.name = name;}


dynamic import -> it is a function like syntax that will loads module at runtime and will return a promise

import will return a module object */