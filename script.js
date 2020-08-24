
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

      //PASSWORD REQUIREMENT FUNCTION
      Requirements = function() {
      //password options array
      passwordOptions = [
        {
          name: "Length",
          request: "Choose a value between 8 and 128 for password length.",
          entry: null
        },
        {
          name: "Upper Case",
          request: "Add uppercase letters in password?OK for yes or Cancel for no.",
          entry: null
        },
        {
          name: "Lower Case",
          request: "Add lowercase leters in password? OK for yes or Cancel for no.",
          entry: null
        },
        {
          name: "Numeric",
          request: "Add numbers to password? OK for yes or Cancel for no.",
          entry: null
        },
        {
          name: "Special Characters",
          request: "Add special characters to password? OK for yes or Cancel for no.",
          entry: null
        }
      ];  
    }

    //FUNCTION FOR USER INPUT
    var userInput= function(){
      Requirements();

      for(var i = 0; i <passwordOptions.length;i++){
        while (passwordOptions[i].entry == null){
          if(i==0) {
            passwordOptions[i].entry = prompt(passwordOptions[i].request);
            length = parseInt(passwordOptions[i].entry);

            if (length < 8 || length > 128){
              lengthValid = false;
              window.alert("Please pick valid length,try again!")
              writePassword();
              return;
            }
            else {lengthValid = true;
            }
          }

        else{passwordOptions[i].entry = confirm(passwordOptions[i].request);
        }
      }
    }
    }

//charSet variable
var upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
var numericSet = "0123456789";
var specialSet = " \!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
//all character sets together
var charSet = [0,upperCaseSet,lowerCaseSet,numericSet,specialSet];
//console.log(userInput);

    //PASSWORD function
    function generatePassword() {
      // The user is asked for requirements
      userInput();

      // Pick a value from each required character set and join the required character sets into one set to pull remaining values from
      var requiredChar = "";
      // var requiredCharIndex = "";
      var charList = "";
      for(var i = 1; i < passwordOptions.length; i++) {
        var charSetLocal = charSet[i];
        // console.log(charSetLocal);
        if (passwordOptions[i].entry === false) {
          continue;
        }
        else {
          randomNumber = Math.floor(Math.random() * charSetLocal.length);
          requiredChar += charSetLocal.substring(randomNumber,randomNumber+1);
          // requiredCharIndex += i;
          charList += charSetLocal;
        }
      }

      // Determine the remaining characters needed
      var remainingLength = passwordOptions[0].entry - requiredChar.length;

      // Generate Password
      password = requiredChar;
      for(var i = 0; i < remainingLength; i++) {
        randomNumber = Math.floor(Math.random() * charList.length);
        password += charList.substring(randomNumber,randomNumber+1);
      }
      return password
    }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
