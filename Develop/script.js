// Assignment code here

function generatePassword(passwordLength, ) {
  // using the passed in paramters generate a password

  // logic

  return generatePassword;

}
 const alphabetLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

 const alphabetCapital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

 const numbers = ["0","1","2","3","4","5","6","7","8","9"];

 const symbols = ["!",""];

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  console.log("Button was clicked")
  let passwordText = document.querySelector("#password");

  // initialize as false and negate if actually true in while loop
  let passwordLengthCorrect = false;    
  let passwordLength = undefined;

  //while this value is not false, the loop will run indefinetely
  while (passwordLengthCorrect != true) {
    passwordLength = window.prompt("How many characters should your password be? Choose between a minimum of 8 characters and a maximum of 128 characters");
    
    if (passwordLength < 8) {
      alert("Password must be at least 8 characters");
    } else if (passwordLength > 128) {
      alert("Password must be at most 128 characters");
    } else {
      passwordLengthCorrect = true;
    }
  }

  let hasUpperCase = window.prompt("Would you like to include uppercase letters? Type YES or NO")
  console.log(hasUpperCase);

  let hasSpecialCharacters = window.prompt("Would you like to have special characters included? Type YES or NO");
  console.log(hasSpecialCharacters);
  
  let password = generatePassword(passwordLength,hasUpperCase,hasSpecialCharacters);

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

