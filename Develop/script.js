const alphabetLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const alphabetCapital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const numbers = ["0","1","2","3","4","5","6","7","8","9"];

const symbols = ["!",""];
// Assignment code here

function generatePassword(passwordLength, hasUpperCase, hasSpecialCharacters) {
  // using the passed in paramters generate a password

  let dict = [];
   if (hasUpperCase) {
     dict.push(...alphabetCapital);
   }
   if (hasSpecialCharacters) {
     dict.push(...symbols);
   }

  //.push adds elements to the end of an array and ... is the spread operator that spreads contents of an array 
  dict.push(...alphabetLowercase)
 
  let finalPassword = "";
   for (let i=0; i < passwordLength; i++) {
     //variable for indexing an array
    let dictIndex = Math.floor(dict.length * Math.random());   
      dict[dictIndex];
     finalPassword += dict[dictIndex];
    
   }
   return finalPassword;

 }

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");


function writePassword() {
  console.log("Button was clicked")
  let passwordText = document.querySelector("#password");

  
  const passwordLength = fetchPasswordLength();
  const hasSpecialCharacters = fetchHasSpecialCharacters();
  const hasUppercaseLetters = fetchHasUpperCaseLetters();
  
  console.log({passwordLength, hasSpecialCharacters, hasUppercaseLetters})
  let password = generatePassword(passwordLength,hasUppercaseLetters,hasSpecialCharacters);
  
  passwordText.value = password;
}





// a user can call this and it will prompt the user for special characters
// and it will return true or false if they want special characters
function fetchHasSpecialCharacters() {
  let hasSpecialCharacters;
  while (true) {
    let input = window.prompt("Would you like to have special characters included? Type YES or NO");
    
    if (input == "YES" || input == "yes") {
      hasSpecialCharacters = true;
      break;
    } else if (input == "NO" || input == "no") {
      hasSpecialCharacters = false;
      break;
    } else {
      alert("Please type YES or NO")
    }
  }
  return hasSpecialCharacters;
}

function fetchPasswordLength() {
  let passwordLength;
  while (true) {
    let input = window.prompt("How many characters should your password be? Choose between a minimum of 8 characters and a maximum of 128 characters");
    
    //logs password length as a string. We are converting it to a number
    passwordLength = parseInt(input, 10);  
    if (passwordLength < 8) {
      alert("Password must be at least 8 characters");
      
    } else if (passwordLength > 128) {
      alert("Password must be at most 128 characters");
    } else {
      break;
    }
  }
  return passwordLength
  
}

function fetchHasUpperCaseLetters() {
  // return if the user wants upper case as a boolean
  let hasUpperCase;
  while (true) {
    let input = window.prompt("Would you like to include uppercase letters? Type YES or NO")
    
    if (input == "YES" || input == "yes") {
      hasUpperCase = true;
      break;
    } else if (input == "NO" || input == "no") {
      hasUpperCase = false;
      break;
    } else {
      alert("You can only write yes or no")
    }
    
  }
  return hasUpperCase;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






















let add = 0;

for (i=0; i <1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    add += i;    // add = add + 1
  } 
};

console.log(add);


