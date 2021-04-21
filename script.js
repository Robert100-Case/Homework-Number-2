// Assignment Code
var generateBtn = document.querySelector("#generate");
var strlength;
var length;
var x=0;
charset="";

// Write password to the #password input
function writePassword() {
  strlength=prompt("enter a number between 7 and 129 for your password length","");
  length=parseInt(strlength);
  if(length < 8 | length > 128) {alert("password to long or short");return;}
  
  var caps=confirm("would you like it to contain uppercase letters?")
  if(caps)charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";//alert(charset);
  var num=confirm("would you like it to contain numbers?")
  if(num)charset += "0123456789";//alert(charset);
  var lower=confirm("would you like it to contain lowercase letters?")
  if(lower)charset+="abcdefghijklmnopqrstuvwxyz";//alert(charset);
  var spec=confirm("would you like to contain special characters?")
  if(spec)charset+="%$#@!*^&";
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
charset ="";
}

// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);

function generatePassword() {

 retVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
}