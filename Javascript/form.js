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
username.value
email.value

gender = form.elements.gender.value //it tells which element / radio button i selected

agree = form.elements.agree.checked; //it checks whether the checkbox is ticked or not

course = form.elements.course.value; //for checking the values

skills = form.elements.skills.value;

//for getting the values from multiselect
Array.from(form.elements.skills.options).filter(o =>o.selected).map(i => i.value)

//validation
if(!name || !mail || !pass){
    alert("Validation should be done");
}