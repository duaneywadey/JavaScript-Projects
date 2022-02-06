const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

function celToFar() {
	let output = ( parseFloat(celsius.value) * 9/5) + 32;
	fahrenheit.value = parseFloat(output.toFixed(2));
	console.log(output + "°F");

}

function farToCel() {
	let output = ( parseFloat(fahrenheit.value) - 32) * 5/9;
	celsius.value = parseFloat(output.toFixed(2));
	console.log(output + "°C");
}