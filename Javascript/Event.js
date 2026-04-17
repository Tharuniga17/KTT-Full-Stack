//Event -> an event is something like a signal that has happened in the browser
//like how user clicks an event, user types and page loads these are events
//user will perform some action browser detects it and javascript will react
//javascript is event-driven, does not run continuously, it runs when an event occurs
//Event handler -> it is a function that runs when an event happens

//Ways to handle Event handlers
//HTML ATTRIBUTE
{/* <button onClick="alert('clicked')"></button> */}

//DOM property
btn.onclick = function(){
    alert("Clicked");
}

//button.onclick = () => alert(1);
//button.onclick = () => alert(2); -> this will overwrites previous

//event object -> it is a special object created by the browser whenever an event happens, and it will contains all the details about that event
// it will show event type, event clientx, event key like that 

btn.addEventListener("click",function(event){
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
})
/* 
TYPES OF MOUSE EVENTS:

click
contextmenu
mouseover
mouseout
mousedown
mouseup
mousemove
dblclick

*/

box = document.getElementById("box");
box.addEventListener("click",()=>{
    box.innerText = "clicked";
})  // it will show as clicked when we click that div

//dblclick -> double click on the box
box.addEventListener("dblclick",()=>{
    box.style.background = "red";
}) //if i do double like the colour is changed to red

box.addEventListener("mouseover",()=>{
    box.style.background = "green";
}); //when i take mouse near the colour changes to green 

box.addEventListener("mouseout",()=>{
    box.style.background = "yellow";
}); //when the mouse moved out changes to yellow

box.addEventListener("contextmenu",(e)=>{
    e.preventDefault(); //it will stop performing default browser action when right clicked like inspect, copy instead it will show as clicked
    alert("Right clicked");
})

box.addEventListener("mouseup",()=>{
    console.log("clicked up")
});
box.addEventListener("mousedown",()=>{
    console.log("clicked down")
});

box.addEventListener("mouseenter",()=>{
    console.log("mouse entered box")
})

//keyboard events -> it happens when the user presses or releases keys on the keyboard.
//keydown -> triggered when key is pressed down
document.getElementById("input").addEventListener("keydown", function(event){
    console.log(event.key);
})

//form events
//submit => form submitted
//focus => input selected

//when you click an element, the event does not stay there, it will travel in 3 phases,
//capturing (top -> down)
//target (actual element)
//Bubbling( bottom -> up)

/*
Bubbling means event starts from the target element and moves upwards to parents 
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>

here it goes like 

*/
//before bubblin
{/* <button id="btn1">One</button>
<button id="btn2">Two</button>
<button id="btn3">Three</button>

<script>
document.getElementById("btn1").onclick = () => {
    console.log("One");
};

document.getElementById("btn2").onclick = () => {
    console.log("Two");
};

document.getElementById("btn3").onclick = () => {
    console.log("Three");
};
</script> */}

// <div id="parent">
//     <button>One</button>
//     <button>Two</button>
//     <button>Three</button>
// </div>

parent.onclick = (e) =>{
    if(e.target.tagName === "Button"){
        console.log(e.target.innerText);
    }
};
//here parent listens to all clicks and tells which child triggerend it
//e.target will tell which element was clicked

//CAPTURING PHASE
//it is from top to bottom -> document->html->body->parent->button
//here parent will run first and then child runs


// document.getElementById("myform").addEventListener("click",(e) => {
//     if(!isloggedin){
//         console.log("blocked by parent");
//         e.stopPropagation(); //will stop before child runs
//     }
// },true);
// document.getElementById("deleteBtn").addEventListener("click",()=>{
//     console.log("delete button clicked")
// })

//event delegation is also same as event bubbling

//Browser default action -> when an event happens, browser will automatically performs some buit-in action
//example of default actions,
//like link if u click that link it will move to another page
//if u submit a form the data will be sent to a server and the page reloads
//mouse selection where the texts will be selected
// right click action -> context menu opens
/* we need to prevent the default actions becuase sometimes we need custom behavior instead of browser behavior */
//to stop default action
// link.addEventListener("click",(e) =>{
//     e.preventDefault();
//     console.log("navigation blocked");
// });

//EVENT DISPATCHING 
/*Browser creates events like click, keyboard, submit but in javascript we can manually create and trigger our own events called dispatching custom events   */

//creating a simple event
let event = new Event("myEvent");

//syntax
// new Event(type,options)
//type=>name of the event, options are optional
//options include bubbles and cancelable -> 
/*
bubbles are like bubbling it will go from bottom to top
for making preventdefault work we need to
 */

//Dispatch means manually sending an event or trigger
event = new Event("hello");
document.addEventListener("hello",()=>{
    console.log("hello");
});
document.dispatchEvent(event);

//Pointer Events
//it is the events for any pointing device like mouse, touch, stylus, event triggered when u interact with screen using mouse, touch or pen.
/*Pointer events includes 
pointerdown  -> press
pointermove  -> move
pointerup    -> Release
pointerenter -> Pointer enters ekement
pointerleave -> pointer leaves element
*/

//pointerdown 
box.addEventListener("pointerdown",()=>{
    console.log("Pressed");
});

//pointermove
box.addEventListener("pointermove",()=>{
    console.log("moving");
});

//pointerup
box.addEventListener("pointerup",()=>{
    console.log("released");
});

//pointerenter
box.addEventListener("pointerenter",() =>{
    console.log("Pointer entered");
});

box.addEventListener("pointerleave", () => {
  console.log("Pointer left");
});

//it happens when the action is suddenly stopped
box.addEventListener("pointercancel", () => {
  console.log("Pointer cancelled");
});


box.onpointerdown = function () {
  document.onpointermove = function (e) {
    box.style.left = e.pageX + "px";
    box.style.top = e.pageY + "px";
  };

  document.onpointerup = function () {
    document.onpointermove = null;
  };
};
box.draggable = true;

window.addEventListener("scroll",()=>{
    console.log("Scrolling..")
})

//scrollY
console.log(window.scrollY);

//scrollX
console.log(window.scrollX);

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    document.body.style.background = "lightgray";
  } else {
    document.body.style.background = "white";
  }
});

