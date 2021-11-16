function ValidateNumber(strNumber) {
  var regExp = new RegExp("^\\d+$");
  var isValid = regExp.test(strNumber); // or just: /^\d+$/.test(strNumber);
  return isValid;
}

console.log(ValidateNumber(""));
