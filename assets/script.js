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

//Randomizes password & creates password
function randomize(passwordLength, passwordCharacters){
  var newPassword = '';
  for (var i = 0; i < passwordLength; i++){
    var random = Math.floor(Math.random()*passwordCharacters.length);
    newPassword += passwordCharacters.substring(random, random+1); 
  };
  document.querySelector('#password').textContent = newPassword;
}

//Takes ueser choices and creates password 
function generatePassword () {
  //choose how long password 
  var chosenLength = window.prompt("Choose a length of password (8~128 characters):")
  //limit choices to valid number choices 
  if (chosenLength<8 || chosenLength>128){
    alert("Please choose a password length of 8 to 128");
    return; 
  } 
  //user choices
  var chosenUpper = window.confirm("Would you like to use uppercase letters?");
  var chosenLower = window.confirm("Would you like to use lowercase letters?");
  var chosenNumber = window.confirm("Would you like to use numbers?");
  var chosenSpecial = window.confirm("Would you like to use special characters?");
  //logic 
  if (chosenUpper === true && chosenLower === true && chosenNumber === true && chosenSpecial === true) {
    //all yes 
    randomize(chosenLength, upper.concat(lower, numbers, special));
  } else if (chosenUpper !== true && chosenLower === true && chosenNumber === true && chosenSpecial === true) {
    //lower, number, special
    randomize(chosenLength, lower.concat(numbers, special));
  } else if (chosenUpper === true && chosenLower === true && chosenNumber === true && chosenSpecial !== true) {
    //Upper, lower, number 
    randomize(chosenLength, upper.concat(lower, numbers));
  } else if (chosenUpper === true && chosenLower !== true && chosenNumber === true && chosenSpecial === true) {
    //upper, number, special 
    randomize(chosenLength, upper.concat(numbers, special));
  } else if (chosenUpper === true && chosenLower === true && chosenNumber !== true && chosenSpecial === true){
    //upper, lower, special 
    randomize(chosenLength, upper.concat(lower, special));
  } else if (chosenUpper === true && chosenLower === true && chosenNumber !== true && chosenSpecial !== true){
    //upper lower
    characters = upper.concat(lower);
    randomize(chosenLength, upper.concat(lower)); 
  } else if (chosenUpper === true && chosenLower !== true && chosenNumber !== true && chosenSpecial === true){
    //upper special
    randomize(chosenLength, upper.concat(special));
  } else if (chosenUpper === true && chosenLower !== true && chosenNumber === true && chosenSpecial !== true){
    //upper number - 
    randomize(chosenLength, upper.concat(numbers)); 
  } else if (chosenUpper !== true && chosenLower === true && chosenNumber === true && chosenSpecial !== true){
    //lower, number 
    randomize(chosenLength, lower.concat(numbers)); 
  } else if (chosenUpper !== true && chosenLower === true && chosenNumber !== true && chosenSpecial === true){
    //lower, special 
    randomize(chosenLength, lower.concat(special)); 
  } else if (chosenUpper !== true && chosenLower !== true && chosenNumber === true && chosenSpecial === true){
    //number, special 
    randomize(chosenLength, numbers.concat(special)); 
  } else if (chosenUpper !== true && chosenLower !== true && chosenNumber !== true && chosenSpecial === true){
    //just special 
    randomize(chosenLength, special)
  } else if (chosenUpper !== true && chosenLower !== true && chosenNumber === true && chosenSpecial !== true){
    //just numbers - 
    randomize(chosenLength, numbers)
  } else if (chosenUpper === true && chosenLower !== true && chosenNumber !== true && chosenSpecial !== true){
    //just upepercase - 
    randomize(chosenLength, upper)
  } else if (chosenUpper !== true && chosenLower === true && chosenNumber !== true && chosenSpecial !== true){
    //just lowercase - 
    randomize(chosenLength, lower)
  } else {
    //all no --> "Please select at least one of the choices" then reruns function
    alert("Password must contain at least one of the following for a return: uppercase letters, lowercase letters, numbers, or special characters.");
  }
}; 