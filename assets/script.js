// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", function() {
  generatePassword();
});

//Valid characters: 
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%^&*(){}[]=<>/.,";

function generatePassword () {
    var passwordCharacters = ''
    var newPassword = '';
    //choose how long password 
    var chosenLength = window.prompt("Choose a length of password (8~128 characters):")
    //limit choices to valid number choices 
    if (chosenLength<8 || chosenLength>128){
      alert("Please choose a password length of 8 to 128");
      return; 
    };
    //user choices
    var chosenUpper = window.confirm("Would you like to use uppercase letters?");
    var chosenLower = window.confirm("Would you like to use lowercase letters?");
    var chosenNumber = window.confirm("Would you like to use numbers?");
    var chosenSpecial = window.confirm("Would you like to use special characters?");
    //limits valid characters to make password out of 
    if (chosenUpper){  
        passwordCharacters += upper
    } if (chosenLower){
        passwordCharacters += lower
    } if (chosenNumber){
        passwordCharacters += numbers
    } if (chosenSpecial){
        passwordCharacters += special
    } else {
        alert("Please choose valid data type")
    }
    //randomizes and generates password
    for (var i = 0; i < chosenLength; i++){
        var random = Math.floor(Math.random()*passwordCharacters.length);
        newPassword += passwordCharacters.substring(random, random+1); 
      };
    //puts password on screen 
    document.querySelector('#password').textContent = newPassword;
};