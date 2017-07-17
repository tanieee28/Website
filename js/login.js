var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("email1").value;
var password = document.getElementById("exampleInputPassword1").value;
if ( username == "tanmay@gmail.com" && password == "123"){
alert ("Login successfully");
window.location = "login_home.html"; // Redirecting to other page.
return false;
}
else{
    if(attempt<0)
        alert("You have excedded the limit");
    if(attempt>0)
        {
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
}
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("email1").disabled = true;
document.getElementById("exampleInputPassword1s").disabled = true;
document.getElementById("login_submit_btn").disabled = true;
return false;
}
}
}