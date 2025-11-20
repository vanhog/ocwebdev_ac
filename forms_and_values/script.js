function double() {
  // Doubles the value given in
  // an inputfield and outputs it
  // on the page

  docNumber = Number(document.getElementById('formInput').value);

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
  // Calculates the age of person on
  // the day the function is called
  // and outputs it on the page

  yob = Number(document.getElementById('formInput').value);

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

function ageDiff() {
  // Calculates the difference between two
  // life ages and outputs it on the page

  yob1 = Number(document.getElementById('formInput1').value);
  yob2 = Number(document.getElementById('formInput2').value);

  if (!isNaN(yob1) && !isNaN(yob2)) {
    if (yob1 >= yob2) {
      thisAgeDiff = yob1 - yob2;
    } else {
      thisAgeDiff = yob2 - yob1;
    }
    document.getElementById('actionMessage').innerHTML =
      'The age difference in years is';
    document.getElementById('result').innerHTML = thisAgeDiff;
  } else {
    document.getElementById('actionMessage').innerHTML =
      'Please enter valid data.';
  }
}

function releaseValue(inInputarea) {
  // Clears the input field given as
  // param:
  //      inInputarea

  thisArea = document.getElementById(inInputarea);
  thisArea.value = '';
}
