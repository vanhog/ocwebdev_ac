function weatherQualityByIndex() {
  // Outputs the weather quality to the page
  // according to an index value read from
  // an input element

  docNumber = Number(document.getElementById('formInput').value);
  console.log(docNumber);

  // to Andre: looks as if shortcuts are okay
  if (!isNaN(docNumber) && docNumber >= 0 && docNumber <= 10) {
    if (docNumber <= 2) {
      thisQual = 'poor';
    } else if (docNumber <= 5) {
      thisQual = 'okay';
    } else if (docNumber <= 7) {
      thisQual = 'good';
    } else {
      thisQual = 'great';
    }
    document.getElementById('actionMessage').innerHTML =
      'The weather quality is:';
    document.getElementById('result').innerHTML = thisQual;
  } else {
    document.getElementById('actionMessage').innerHTML =
      'Please enter a valid number';
    document.getElementById('formInput').value = '';
    document.getElementById('result').innerHTML = '';
  }
}

function legalAge() {
  // Calculates the age of person on
  // the day the function is called
  // and checks for legal age.
  // Result is shown on the page.

  yob = Number(document.getElementById('formInput').value);

  if (!isNaN(yob)) {
    thisDate = new Date(Date.now());
    thisAge = thisDate.getFullYear() - yob;
    if (thisAge >= 18) {
      thisStatus = 'Adult';
    } else {
      thisStatus = 'Minor';
    }
    document.getElementById('result').innerHTML = thisStatus;
    document.getElementById('actionMessage').innerHTML = 'Status';
  } else {
    document.getElementById('actionMessage').innerHTML =
      'Please enter your year of birth.';
    document.getElementById('formInput').value = '';
    document.getElementById('result').innerHTML = '';
  }
}
