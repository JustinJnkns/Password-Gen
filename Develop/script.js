
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

  //password Requirements function
  initialize = function() {
  //password options array
  passwordRequirements = [
    {
      name: "Length",
      request: "please enter desired length of password? Enter a value between 8 and 128.",
      entry: null
    },
    {
      name: "Upper Case",
      request: "Include uppercase letters in password? Enter OK for yes or Cancel for no.",
      entry: null
    },
    {
      name: "Lower Case",
      request: "Should the password include lower case letters? Enter OK for yes or Cancel for no.",
      entry: null
    },
    {
      name: "Numeric",
      request: "Should the password include numbers? Enter OK for yes or Cancel for no.",
      entry: null
    },
    {
      name: "Special Characters",
      request: "Add special characters to password? Enter OK for yes or Cancel for no.",
      entry: null
    }
  ];  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
