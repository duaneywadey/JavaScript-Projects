const select = document.querySelectorAll(".currency");
const btn = document.getElementById('btn');
const num = document.getElementById('num');
const ans = document.getElementById('ans');

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () =>{
	let currency1 = select[0].value;
	let currency2 = select[1].value;
	console.log(currency1);
	console.log(currency2);
	let value = num.value;

	if(currency1 != currency2) {
		convert(currency1, currency2, value);
	}

	else {
		alert("Choose different currency");
	}

});

function convert(currency1, currency2, value) {
	const host = 'api.frankfurter.app';
	fetch(`https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`)
	.then((val) => val.json())
	.then((val) => {
		// console.log(val);
		console.log(Object.values(val.rates)[0]);
		ans.value = Object.values(val.rates)[0];
	

	})
}