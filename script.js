// Array of special characters to be included in password

console.log('hello')
var characterLength=10;
var choiceArr=[];


var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options

var choiceArr=[];


function getPrompts() {
  choiceArr=[];
  
var characterLenght = parseInt(prompt('How many characters do you want for password? 10-64 characters'));

}

if(isNaN(characterLenght)|| characterLenght<10 || characterLenght>65){
  alert('Character length needs to be 10-65 character length');
  return false;
}
if (confirm('Would you like lowercase letters in your password?')){
choiceArr=choiceArr.concat(lowerCasedCharacters);
}
if (confirm('Would you like uppercase letters in your password?')){
choiceArr=choiceArr.concat(upperCasedCharacters);
}

if (confirm('Would you like numericCharacters in your password?')){
  choiceArr=choiceArr.concat(numericCharacters);
  }

  if (confirm('Would you like specialCharacters in your password?')){
    choiceArr=choiceArr.concat(specialCharacters);
    
    return true;
 }

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
var password='';
for (var i=0; i<characterLength; i++){
  var randomIndex = Math.floor(Math.random()*specialCharacters.length);
  password = password+choiceArr[randomIndex];
}
return password;
}


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
var correctPrompts=getPrompts();
var passwordText = document.querySelector('#password');

if (correctPrompts){
  var newPassword = generatePassword();
   passwordText.value = newPassword;

 
} else {
  passwordTest.value='';
}};

// Add event listener to generate button
var generateBtn=document.querySelector('#generate');
generateBtn.addEventListener('click', writePassword);