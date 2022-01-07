// Assignment code here

function generatePassword(passwordLength, ) {
  // using the passed in paramters generate a password

  // logic

  return generatePassword

console.log("Generate password called")
}
 var alphabetLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 var alphabetCapital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

 var numbers = ["0","1","2","3","4","5","6","7","8","9"];

 var symbols = ["!",""];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  console.log("Button was clicked")
  var passwordText = document.querySelector("#password");
  
  var passwordLength = window.prompt("How many characters should your password be? Choose between a minimum of 8 characters and a maximum of 128 characters");
  
  //logs the password length of the user's input
  console.log(passwordLength);     
  
  var hasUpperCase = window.prompt("Would you like to include uppercase letters? Type YES or NO")
  console.log(hasUpperCase);

  var hasSpecialCharacters = window.prompt("Would you like to have special characters included? Type YES or NO");
  console.log(hasSpecialCharacters);
  
  var password = generatePassword(passwordLength,hasUpperCase,hasSpecialCharacters);

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

