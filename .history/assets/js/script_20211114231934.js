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

function passwordLength() {
  var prompPasswordtLength = window.prompt(
    "Please enter a number for the desired character length of password, between 8 and 128."
  );

  var regEx = RegExp("^\\d+$");
  if (
    regEx.test(prompPasswordtLength) &&
    prompPasswordtLength >= 8 &&
    prompPasswordtLength <= 128
  ) {
    var isValidLength = prompPasswordtLength;
    lowerCaseType();
  } // or just: /^\d+$/.test(strNumber);
  window.alert(
    "You need to provide a valid numeric answer between 8 and 128! Please try again."
  );
  return passwordLength();

  // if (promptLength === "" || promptLength === null) {
  //   window.alert(
  //     "You need to provide a valid answer between 8 and 128! Please try again."
  //   );
  //   return passwordLength();
  // } else if (promptLength !== "[0-9]" || "8" < promptLength > "128") {
  //   window.alert("You need to provide a valid number! Please try again.");
  //   passwordLength();
  // } else {
  //   // if (promptLength === "[0-9]" && "8" > passwordLength.length < "128")
  //   return passwordLength();
  // }
}

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
function lowerCaseType() {
  var promptLowerCaseType = window.prompt(
    "Would you like to include lowercase characters?"
  );

  var promptLowerCaseType = promptLowerCaseType.toLowerCase();

  if (promptLowerCaseType === "" || promptLowerCaseType === null) {
    window.alert(
      'You need to provide a valid "Yes" or "No"! Please try again.'
    );
    lowerCaseType();
  } else if (promptLowerCaseType === "yes") {
    var hasLowerCaseType = true;
    console.log(promptLowerCaseType);
  } else {
    var hasLowerCaseType = false;
    console.log(hasLowerCaseType);
  }
}

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

function writePassword() {
  passwordLength();
}
