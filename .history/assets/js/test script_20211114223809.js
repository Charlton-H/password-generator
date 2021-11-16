function ValidateNumber(strNumber) {
  var regExp = new RegExp("^\\d+$");
  if (regExp.test(strNumber)) {
    return true;
  } // or just: /^\d+$/.test(strNumber);
  return false;
}

console.log(ValidateNumber());
