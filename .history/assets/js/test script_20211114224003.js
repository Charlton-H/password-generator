function ValidateNumber(strNumber) {
  var regEx = new RegExp("^\\d+$");
  if (regEx.test(strNumber)) {
    return true;
  } // or just: /^\d+$/.test(strNumber);
  return false;
}

console.log(ValidateNumber("1"));
