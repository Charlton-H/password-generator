// function ValidateNumber(strNumber) {
//   var regEx = RegExp("^\\d+$");
//   if (regEx.test(strNumber) && strNumber >= 8 && strNumber <= 128) {
//     return true;
//   } // or just: /^\d+$/.test(strNumber);
//   return false;
// }

// console.log(ValidateNumber("8"));

function passwordLength(strNumber) {
  var promptLength = window.prompt(
    "Please enter the desired length of password, between 8 and 128 characters."
  );

  var regEx = RegExp("^\\d+$");
  if (regEx.test(strNumber) && strNumber >= 8 && strNumber <= 128) {
    return true;
  } // or just: /^\d+$/.test(strNumber);
  window.alert(
    "You need to provide a valid numeric answer between 8 and 128! Please try again."
  );
  return passwordLength();
}

function writePassword() {
  passwordLength();
}
