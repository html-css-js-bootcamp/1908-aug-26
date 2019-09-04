console.log("first run");
// This gives value in the text box
var fname=document.querySelector("#fname").value;
var lname=document.querySelector("#lname").value;
var phone=document.querySelector("#phone").value;
var email=document.querySelector("#email").value;
var password=document.querySelector("#password");
var confirmpassword = document.querySelector("#confirmpassword");
var age=document.querySelector("#age").value;
var btnSubmit=document.getElementById("Submit");
var errors=document.getElementById("errors");
function validate(){
    debugger;
    if(fname==""||fname==null||fname==undefined){
        errorMessage("first name cannot be empty");        
    }
    if(lname==""||lname==null||lname==undefined){
        errorMessage("last name cannot be empty");        
    }
    return false;
}
function errorMessage(msg){
    var li=document.createElement("li");
    li.innerHTML=msg;
    errors.appendChild(li);
}
function checkpassword(){
    debugger;
    if(password!=confirmpassword){
        alert('password and confirm password do not match');
    }
}
confirmpassword.onblur=checkpassword;
btnSubmit.onclick=validate;
