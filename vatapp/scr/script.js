const mode_remove = document.getElementById('removevat');
const mode_add = document.getElementById('addvat');

const label_net = document.getElementById('amountlablenet');
const label_gross = document.getElementById('amountlabelgross');

const per7 = document.getElementById('per7');
const per19 = document.getElementById('per19');

let vatRate = 19;
let mode = 'add';

console.log(document.getElementById('givenAmount'));

function toggleLabels() {
  amountlabelnet.classList.toggle('hidden');
  amountlabelgross.classList.toggle('hidden');
  resultlabelnet.classList.toggle('hidden');
  resultlabelgross.classList.toggle('hidden');
}
mode_remove.addEventListener('change', function (event) {
  mode = 'remove';
  toggleLabels();
  setVAT();
});

mode_add.addEventListener('change', function (event) {
  mode = 'add';
  toggleLabels();
  setVAT();
});

per7.addEventListener('change', function (event) {
  vatRate = 7;
  resultvatlabel.innerText = `VAT Amount (${vatRate}%) `;
  document.getElementById('resultvatamount').innerText = `0.00 € `;
  setVAT();
});

per19.addEventListener('change', function (event) {
  vatRate = 19;
  resultvatlabel.innerText = `VAT Amount (${vatRate}%) `;
  document.getElementById('resultvatamount').innerText = `0.00 € `;
  setVAT();
});

function setVAT() {
  let givenAmount = document.getElementById('amount').value;
  // console.log(givenAmount);
  if (isNaN(givenAmount)) {
    document.getElementById('amount').value = '0.00';
    document.getElementById('amount_error').classList.remove('hidden');
    //window.alert('Please enter a valid amount.');
  } else {
    let vatfactor = (100 + Number(vatRate)) / 100;

    if (mode === 'add') {
      resAmount = (Number(givenAmount) * vatfactor).toFixed(2);
      resVAT = (resAmount - givenAmount).toFixed(2);
    } else {
      resAmount = (Number(givenAmount) / vatfactor).toFixed(2);
      resVAT = (givenAmount - resAmount).toFixed(2);
    }

    document.getElementById('resultvatamount').innerHTML = `${resVAT} &#8364; `;
    document.getElementById(
      'resultfinalamount'
    ).innerHTML = `${resAmount} &#8364;`;
    document.getElementById('amount').value = Number(givenAmount).toFixed(2);
  }
  //console.log(resAmount, resVAT);
}

function clear_errorMsg() {
  document.getElementById('amount_error').classList.add('hidden');
}
