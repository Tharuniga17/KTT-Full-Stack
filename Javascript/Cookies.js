//cookies are small pieces of data that will be stored in the browser by a website, that will help the website to remember information when we login again
//it is a key-value pair stored in the browser that is automatically sent back to the server
//user logs in with username and password on a website -> server creates a cookie -> browser stores it locally -> everytime u visit the same site, servere recognizes you
//it will keeps u logged in and without cookies u need to login every page reload 

//reading cookies
document.cookie

//for writing cookie
document.cookie = "user=John"

//set cookie with options
document.cookie = "user=John; path=/; max-age = 3600";

//for deleting set ites value to zero 
document.cookie = "user=John;max-age = 0";

//LocalStorage and sessionStorage
//they are browser storage mechanisms used to store data(key - value pairs) on the client side 
//it will stores the data permanently even the page reloads or refresh
//here the data will stays forever until you delete in manually , it will be shared across all tabs 


//session storage -> data stores only for that tab
sessionStorage.setItem("token","123");

//it will not shared across tabs, it will be deleted when tab closes

//methods are
storage.setItem("key","value");
storage.getItem("key");
storage.removeItem("key");
storage.clear();
storage.key(index);
storage.length;

//it is used when we need data temporary, should not persist after tab close, should not be shared across tabs

//IndexedDB -> it is also a browser based database used to store large, structured data on the client side because localstorage is just 5mb, session storage is also small, cookies very small and also sent to server
//large storage, structured data and offline support

request = indexedDB.open("store",1); //-> it creates or opens database

//for storing object like table
db.createObjectStore("books", { keyPath: "id" });  //like sql and mongodb

//for transaction
tx = db.transaction("books","readwrite");

//index
books.createIndex("price_idx","price");


//bezier curver -> it is a smooth curver created using control points , we dont draw the curver directly, we control it using points
//Types of bezier curves
//linear -> straight line, quadratic -> simple curve , cubic -> complex curve
//it is used in css animations 

//transition : all 0.5s cubic-bezier(0.42,0,0.58,1);

//in svg graphics also 
<path d = "M10 80 Q 95 10 180 80 "/>

//we use this when we need smooth curvers, animation control, and to work with svg/canvas

//Css animations allow you to change styles smoothly over time without writing javascript
//background-color : red;

/* 
There are two types of animations
CSS Transitions(simple animations)->Triggered whea property changes
CSS Keyframe Animations -> runs automatically

CSS Transitions
it defines what property ton animate, how long it should take like that 
.box{
transition : background-color 2s;
}


Transition Properties,
transition-property : width

transition-duration : width 

transition-timing-function -> speed curve controls how animation feels

linear, ease in , ease out, ease-in-out 

transition-delay -> delay before animation starts

also we use keyframe Animations
@keyframes move{
from {left : 0}
to {left : 200px}
}

.box{
animation : move 2s infinite alternate
};

Animation Properties:

animation-name	
animation-duration	
animation-iteration-count	
animation-direction	
animation-delay


Javascript animations:
Changing values(like position, size,opacity) frame by frame over time

setInterval -> run code for every interval
there are many problems will occur in setInterval

so we move to requestAnimationFrame 
Browser decides the best time to run animation 

requestAnimationFrame(callback);

setInterval - Runs blindly every X ms
requestAnimationFrame - Runs when browser is ready

Custom elements let u create own html tags
<my-card></my-card> this can be reused later, encapsulate html elements using javascript, forming the foundation of web componenets

Instead of creating own html tags, like <div>,<p>,<button> we can create it <my-card>,<user-profile>,<event-item> like this

Shadow DOM => it is the hidden dom inside an element , it lets a component have its own html, own css, isolated from main page
<p>Hello</p> if i change color to red, it will change everywhere

but by using shadow dom , it stays only inside the component

shadow dom is the private dom inside an element which is hidden and isolated 

shadow dom -> protects the component
template is used for storing the component design

i want to store html but not show it immediately , not visible on screen, css not applied, js inside not executed, stored safely

template will store UI design -> attachShadow() will create private dom (this component will have its own world) -> clone template (if we clone it we can use that multiple times or multiple cards) 
next add data because template is static, we make it dynamic by adding data -> same design , different data -> and then insert into shadow dom

slots allow a component to accept and display content from outside to inside its shadow dom
Light dom -> outside 
<user-card>
    <span slot = "username">Tharun</span> -> shadow dom it is the inside component
<user-card>

slot is used inside a component to show external content


:host -> used to style the custom element

:host(selector) -> conditional styling
apply style only if condition matches

:host([centered]){
background : blue;
}
<custom-dialog centered></custom-dialog>

event.composedPath()
it gives full path of event like this [span, slot, div, shadow-root, user-card, body, html...]


*/


