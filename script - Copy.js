// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

var len=prompt("how long would you like your variable to be?","")
var caps=prompt("would you like it to contain only uppercase letters?","")
var lower=prompt("would you like it to contain only lowercase letters?","")
var num=prompt("would you like it to contain only numbers?","")
var spec=prompt("would you like to contain only special characters?","")

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var length = 8,
charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
/*charset1 = "abcdefghijklmnopqrstuvwxyz",
charset2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
charset3 = "0123456789",
charset4 = "%$#@!*^&",*/
retVal = "";
for (var i = 0, n = charset.length; i < length; ++i) {
retVal += charset.charAt(Math.floor(Math.random() * n));
}
return retVal;
} 