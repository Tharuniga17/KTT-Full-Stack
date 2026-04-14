title = document.getElementById("title");
title.textContent = "Hello Tharun"; //for changing the content of the webpage content

// btn = document.getElementById("btn");
// btn.style.background = "green";  //for changing the button colour

//querySelector will always returns first match only
para = document.querySelector(".text");
para.textContent = "para1";


//query selector for selecting all items
items = document.querySelectorAll(".item");
items.forEach(res => {
    console.log(res.textContent);
});

//for changing colours
paras = document.querySelectorAll(".text");
paras.forEach(p => {
    p.style.color = "blue";
})

//matches() it will check if element has class or not
p = document.querySelector(".text");
if(p.matches(".text")){
    console.log("Yes, it has class text");
}

document.getElementsByClassName("item")[0].style.color = "red";

//DOM NAVIGATION

parent = document.querySelector(".container");
console.log(parent.children);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

btn = document.getElementById("btn");

console.log(btn.parentElement);

first = document.querySelector(".item");
console.log(first.nextElementSibling);

console.log(document.querySelector("ul li"));
console.log(document.querySelector("ul > li"));
console.log(document.querySelector("li:first-child"));
console.log(document.querySelector("li:last-child"));

console.log(document.getElementsByTagName("div"));

divs = document.getElementsByTagName("div");
console.log(divs.length);
console.log(divs[0]);

//innerhtml -> content inside an element , we can change that , here we can insert html elements also but in textcontent we cannot do that
box = document.getElementById("title");
box.innerHTML = "<button>Click</button>";

//attributes are extra information inside html tags
//type,id, placeholder are attributes
//getAttribute gets the value of an attribute 
input = document.querySelector("input");
console.log(input.getAttribute("placeholder"));

//setAttribute , can set or update an attribute
input.setAttribute("placeholder","Enter ur name");
console.log(input.getAttribute("placeholder"));

console.log(input.hasAttribute("id"));

input.removeAttribute("placeholder");

console.log(input.getAttribute("placeholder"));

//DOM Hierarchy
/*EventTarget (top parent) -> events like click,input
   ↑
Node -> tree structure
   ↑
Element  -> querySelector, children
   ↑
HTMLElement -> id,style
   ↑
HTMLInputElement -> value,type etc*/

input = document.querySelector("input");
console.log(input.id);
console.log(input.children);
console.log(input.parentNode);
console.log(document.nodeType);
console.log(document.body.nodeType);


box = document.getElementById("box");
// console.log(box.offsetWidth);
// console.log(box.offsetHeight);
console.log(box.clientWidth);
console.log(box.clientHeight);

//for getting the full page height
// fullheight = Math.max(
//     document.body.scrollHeight,
//     document.documentElement.scrollHeight,
//     document.body.offsetHeight,
//     document.documentElement.offsetHeight,
//     document.body.clientHeight,
//     document.documentElement.clientHeight
// );
// console.log(fullHeight);

window.scrollTo(0, 0); // top of page

window.scrollTo(0, 500); // 500px from top

document.getElementById("box").scrollIntoView();

// elem.scrollIntoView(true);  // top
// elem.scrollIntoView(false); // bottom

//for disable scroll
document.body.style.overflow = "hidden";

document.body.style.overflow = "";


//position relative to visible screen
rect = box.getBoundingClientRect();
console.log(rect.top);
console.log(rect.left);

//setting to full page(including scroll)
pageY = rect.top + window.pageYOffset;
pageX = rect.left + window.pageXOffset;

btn = document.getElementById("btn");
// btn.addEventListener("click",function(){
//     alert("button clicked!");
// })
// btn.addEventListener("click", () =>{
//     console.log("clicked");
// });

//moves down
document.addEventListener("keydown",(event) =>{
    console.log(event.key);
})

//moves up
document.addEventListener("keyup",(event) =>{
    console.log(event.key);
});

// btn.addEventListener("mouseover",()=>{
//     btn.style.background = "yellow";
// });

btn.addEventListener("mouseout", () =>{
    btn.style.background = "white";
});

window.addEventListener("scroll" ,()=>{
    console.log(window.pageYOffset);
})

name1 = document.getElementById("name");
name1.addEventListener("input", (e) =>{
    console.log(e.target.value);
});

count = 0;
btn.addEventListener("click",()=>{
    count++;
    console.log(count);
})