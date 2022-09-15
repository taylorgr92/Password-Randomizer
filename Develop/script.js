




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Make a function to start after event listener is pressed
function generatePassword(){
 var charLength = prompt('How many characters would you like your password to be? It must be 8-128 characters.')
 
 while((charLength < 8 ) || (charLength > 128) || (isNaN(charLength)===true)){
  alert("Password length must be between 8 and 128 characters")
  charLength= prompt('How long would you like your password to be?')
 }
// Add all confirming questions for user to answer
var isLowerCase= confirm('Do you want lower case characters?');
var isUpperCase= confirm('Do you want upper case characters?');
var isSpecialCase= confirm('Do you want special case characters? ')
var isNumeric= confirm('Do you want numeric characters?')

//make all variables with choices

var lowerCase= 'abcdefghijklmnopqrstuvwxyz'
var upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numeric = '0123456789'
var specialCase = "#%&@*!()$"
var charBank= '';
var newPassword= '';

//Create if statements and add responses to bank if true
if (isLowerCase){
  charBank= charBank.concat(lowerCase)
}
if(isUpperCase){
  charBank=charBank.concat(upperCase)
}
if(isSpecialCase) {
  charBank= charBank.concat(specialCase)
}
if(isNumeric){
  charBank=charBank.concat(numeric)
}
//Add function to randomize character bank

function random(max){
  return [Math.floor(Math.random() * max)]
}

// Add new variable that will take place of variable and will render on screen

for(var i=0; i < charLength; i++){
  newPassword = newPassword.concat(charBank.charAt(random(charBank.length-1)))
}
//Return password to user
return newPassword

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
