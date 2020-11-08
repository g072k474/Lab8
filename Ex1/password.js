
function checkPasswords(){
    var firstPassword=document.getElementById("password").value;
    var secondPassword=document.getElementById("password2").value;
    if(firstPassword.length>=8 && secondPassword.length>=8)
    {
     if(firstPassword==secondPassword){
         alert("These Password are the same so they are Validated!");
     }
     else{
         alert("These Passwords are not the same please try again!");
     }
    }
    else{
        alert("The Password is to short please type another one");
        alert("This can also mean you have yet to input a password in ethier of the text boxes");
    }
}
