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
