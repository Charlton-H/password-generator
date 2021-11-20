// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

var upperChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialChars = "~`!#$%^&*+=-[]\\';,/{}|\":<>?";

function generatePassword() {
  // "^\\d+$"
  var regEx = RegExp("^[0-9]*$");

  var passwordLength = prompt(
    "Please enter the number of characters you want for you new password, between 8 and 128."
  );

  if (
    regEx.test(passwordLength) &&
    passwordLength >= 8 &&
    passwordLength <= 128
  ) {
    alert("Please confirm the following desired outcomes.");
  } else {
    window.alert(
      "You need to provide a valid numeric answer between 8 and 128! Please try again."
    );
    return generatePassword();
  }

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  var possibleValues = "";

  if (numbers) {
    possibleValues += nums.join("");
  }

  if (lowerCases) {
    possibleValues += lowerChars.join("");
  }

  if (upperCases) {
    possibleValues += upperChars.join("");
  }

  if (special) {
    possibleValues += specialChars;
  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";
  // console.log(stringValues);

  // loop getting random characters
  for (var i = 0; i < passwordLength; i++) {
    randomPasswordGenerated += possibleValues.charAt(
      Math.floor(Math.random() * possibleValues.length)
    );
  }
  // to make sure characters are added to the password

  return randomPasswordGenerated;
}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
