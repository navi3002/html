export function myFunction() {
  var currency = document.getElementById('amount');
  var result = parseInt(Math.ceil(Math.random() * 100) * currency.value);
  document.getElementById('result').innerHTML = result;
}
