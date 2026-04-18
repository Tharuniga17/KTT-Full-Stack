form = document.forms.myForm;
console.log(form)

document.forms[0]//-> shows first form

//Access elements
username = form.elements.username;
console.log(username) //for accessing the name

let email = form.elements.email;
console.log(email)  //for accessing the email

let password = form.elements.password;
console.log(password)

username.addEventListener("input",()=>{
    if(username.value.length < 3){
        username.classList.add("error");
    }else{
        username.classList.remove("error");
        username.classList.add("success");
    }

})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
})

//for getting the values
// username.value
// email.value

// gender = form.elements.gender.value //it tells which element / radio button i selected

// agree = form.elements.agree.checked; //it checks whether the checkbox is ticked or not

// course = form.elements.course.value; //for checking the values

// skills = form.elements.skills.value;

//for getting the values from multiselect
// Array.from(form.elements.skills.options).filter(o =>o.selected).map(i => i.value)

//validation


// message = form.elements.message.value; //for getting the value from text area
//focus => when user clicks or tabs into an input, it will focus => when user starts typing
//blur => when user clicks outside, it will blur the event => when user finished typing

input = document.getElementById("name");
email = document.getElementById("email");

// input.onblur = function(){
//     if(!input.value.includes("@")){
//         msg.innerText = "Invalid Email"
//     }
// }
// input.onfocus = function(){
//     msg.innerText = "";
// };

// newname = document.getElementById("name");
// newname.addEventListener("change",()=>{
//     console.log("Final value: ", newname.value); //it works when u press the tab outside
// });

//input Event -> runs everytime the value changes instantly
// result = document.getElementById("result")
// input = document.getElementById("name");
// input.addEventListener("input",()=>{
//     result.innerText = input.value;
// });

//for clipboard events -> cut,copy,paste
// input.addEventListener("paste",(event) =>{
//     data = event.clipboardData.getData("text/plain");
//     console.log("Pasted: ", data);
// });


input = document.getElementById("input");

// box.addEventListener("input", () => console.log("input"));
// box.addEventListener("change", () => console.log("change"));
// box.addEventListener("copy", () => console.log("copy"));
// box.addEventListener("cut", () => console.log("cut"));
// box.addEventListener("paste", () => console.log("paste"));

//submit event runs when a form is submitted
//click submit button , or enter
// myform = document.getElementById("myform")
// myform.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     console.log("Form submitted");
// });

//normally we get data only after full download  but with download progress, i can read data chunk by chunk , where it will show loading %, progress bar and bytes downloaded
// response.body.getReader() //=> reads data piece by piece

/*
<button onclick="loadData()">Start</button>

<script>
async function loadData() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");

  let reader = response.body.getReader();
  let received = 0;

  while (true) {
    let { done, value } = await reader.read();

    if (done) break;

    received += value.length;

    console.log("Downloaded:", received, "bytes");
  }

  console.log("Done ✅");
}
</script>
*/

//abort => sometimes the request will run until it finishes, but we need to stop the request
//abort will give a cancel button for fetch 

let controller;

async function startFetch() {
  let controller = new AbortController();

  try {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      { signal: controller.signal }
    );

    let data = await response.json();
    console.log("data received", data);

  } catch (err) {
    if (err.name === "AbortError") {
      console.log("Request was cancelled ❌");
    } else {
      console.log("Error:", err);
    }
  }
}

controller;

document.getElementById("stopBtn").addEventListener("click", () => {
  controller.abort();
  console.log("Stopped");
});

//fetch vs Axios both are used to make http requests, where axios is a library and fetch is built in browser api
//axios is easy to use and json handling is automatic 