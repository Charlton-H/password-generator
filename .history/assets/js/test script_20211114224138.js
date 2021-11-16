function ValidateNumber(strNumber) {
  var regEx = RegExp("^\\d+$");
  if (regEx.test(strNumber) && 8 > strNumber < 128) {
    return true;
  } // or just: /^\d+$/.test(strNumber);
  return false;
}

console.log(ValidateNumber("5"));
