function weather(QualityByIndex) {
  // Outputs the weather quality to the page
  // according to an index value read from
  // an input element

  docNumber = Number(document.getElementById('formInput').value);

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

function checkAirQuality() {
  // reads a number between 0 and 150 from an input slider
  // and calculates the according weather quality together
  // with the level of health concern

  thisValue = Number(document.getElementById('weatherQualitySlider').value);
  document.getElementById(
    'aoi'
  ).innerHTML = `Air Quality Index (AOI): ${thisValue}`;

  if (thisValue <= 50) {
    resultStr =
      "<span style='color:green'>Good Level of Health Effect. Litlle or no risk </span>";
  } else if (thisValue <= 100) {
    resultStr =
      "<span style='color:orange'>Moderate Level of Health Effect. Acceptable quality.</span>";
  } else {
    resultStr =
      "<span style='color:red'>Unhealthy for sensitive groups. Level of Health Effect: Generable publics not likely affected.</span>";
  }

  document.getElementById('lhc').innerHTML = resultStr;
}

function adult() {
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

function hookah() {
  // Calculates the age of person on
  // the day the function is called
  // and checks for legal age.
  // Result is shown on the page.

  yob = Number(document.getElementById('formInput').value);
  console.log(yob);
  if (!isNaN(yob)) {
    thisDate = new Date(Date.now());
    thisAge = thisDate.getFullYear() - yob;
    console.log(thisAge);
    if (thisAge >= 18) {
      thisStatus = 'Adult.';
      thisHint = 'Yes, you can smoke hookah.';
    } else {
      thisStatus = 'Minor';
      thisHint = 'Your are not allowed to smoke hookah, yet.';
    }
    document.getElementById('result').innerHTML = thisStatus;
    document.getElementById('hint').innerHTML = thisHint;
    document.getElementById('actionMessage').innerHTML = 'Status';
  } else {
    document.getElementById('actionMessage').innerHTML =
      'Please enter your year of birth.';
    document.getElementById('formInput').value = '';
    document.getElementById('result').innerHTML = '';
  }
}

function q27() {
  // Doubles a value form an input field
  // when that value minus 27 is greater than 27

  thisX = Number(document.getElementById('formInput').value) - 27;
  console.log(thisX);
  if (thisX >= 27) {
    document.getElementById('actionMessage').innerHTML =
      'The result of (x-27) * 2 is';
    document.getElementById('result').innerHTML = thisX * 2;
  } else {
    document.getElementById('actionMessage').innerHTML =
      'Nothing to calculate. x-27 < 27.';
    document.getElementById('result').innerHTML = '';
  }
}
