// Assignment Code
// Added variables

var specialCharactersList = ['!', "\'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '`', '{', '|', '}', '~'];
var numberCharacters = ['0', '9', '8', '7', '6', '5', '4', '3', '2', '1'];
var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var generateBtn = document.querySelector("#generate");

//Add funtion

function options() {

  var passwordLength = parseInt(window.prompt("How many characters would you like in your password? "));

  if (!passwordLength) {
    window.alert("Must enter a password length");
    return;
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password needs to be within 8 and 128 characters please.");
    return;
  }
}

if (passwordLength)

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
