function double() {
  docNumber = document.getElementById('formInput').value;

  if (!isNaN(docNumber)) {
    console.log(docNumber * 2);
    document.getElementById('actionMessage').innerHTML = 'The result is:';
    document.getElementById('result').innerHTML = docNumber * 2;
  } else {
    document.getElementById('actionMessage').innerHTML =
      'Please enter a valid number';
    document.getElementById('formInput').value = '';
  }
}

function age() {
  yob = document.getElementById('formInput').value;

  if (!isNaN(yob)) {
    thisDate = new Date(Date.now());
    thisAge = thisDate.getFullYear() - yob;
    document.getElementById('result').innerHTML = thisAge;
    document.getElementById('actionMessage').innerHTML = 'Your age in years is';
  } else {
    document.getElementById('actionMessage').innerHTML =
      'Please enter your year of birth.';
  }
}
