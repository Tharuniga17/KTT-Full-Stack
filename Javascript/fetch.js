async function getdata(){
    try{
        response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok){
            throw new Error("something is wrong");
        }
        data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err.message);
    }
}
getdata();

fetch("https://jsonplaceholder.typicode.com/users")
   .then(res => res.json())
   .then(data => console.log(data)); //it is the older method, but now they are using await/async which is harder to debug
   //as well it can be used anywhere but async only inside function 


//for sending data to server, we use post request 
fetch("https://jsonplaceholder.typicode.com/posts",{
    method : "POST",  //sending new datato server
    headers:{
        "content-Type" : "application/json"  //data is in json format
    },
    body: JSON.stringify({  //converting JS object -> JSON string server understands this format
        name : "Tharun",     
        age : 20
    })
})
.then(res => res.json())
.then(data => console.log(data));

//for sending form data 

formdata = new FormData();  // empty container
formdata.append("name","Tharun");  //adding data 
fetch("/submit",{    //send using fetch
    method : "POST",
    body : formData
});

//form data methods,
//append -> add new field 
//set() -> formData.set("Chitra") => will replace the old value
//get() -> formData.get("Thaurn")
//delete() => formData.delete("hello")
//has() => formData.has("Aadhvik")

//for sending image or file
file = input.files[0];
fetch("/upload",{
    method : "POST",
    body : file
});