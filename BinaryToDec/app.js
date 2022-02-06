const decimal = document.getElementById('dec');
const binary = document.getElementById('bin');
const decToHexaButton = document.getElementById('decToHexaButton');
const decToOctalButton = document.getElementById('decToOctalButton');
const binToHexaButton = document.getElementById('binToHexaButton');
const decToBinButton = document.getElementById('decToBinButton');
const inputBoxes = document.getElementById('inputBoxes');




function binToDec() {
    let decValue = parseInt((binary.value + '')
    .replace(/[^01]/gi, ''), 2);
    console.log(decValue);
    decimal.value = decValue;

}


function decToBin(){
	let finalBin = Number.parseInt(decimal.value, 10).toString(2);
	console.log(finalBin);
	binary.value = finalBin;

}

function decToHex(){
	let hexade = document.getElementById('hexad');
	let decimal = document.getElementById('dec');
	let decval = parseInt(decimal.value);
	let hexStr =  decval.toString(16);
	console.log(hexStr);
	hexade.value = hexStr;
}

function hexToDec(){
	let hexade = document.getElementById('hexad');
	let decimal = document.getElementById('dec');
	let hexval = hexade.value;
	let decvalHex = parseInt(String(hexval), 16);
	decimal.value = decvalHex;

}


function decToOcta(){
	let decimal = document.getElementById('dec');
	let octa = document.getElementById('octa');
	let decval = parseInt(decimal.value);
	let n = decval.toString(8);
	octa.value = n;
}


function octaToDec(){
	let decimal = document.getElementById('dec');
	let octa = document.getElementById('octa');
	let octval = parseInt(octa.value);
	let n = parseInt(octval,8);
	decimal.value = n;

}

function binToHex(){
	let binary = document.getElementById('bin');
	let hexade = document.getElementById('hexad');
	let binval = parseInt(binary.value);
	var hexa = parseInt(binval, 2).toString(16).toUpperCase();
	hexade.value = hexa;

}

function hex2bin(){
	let binary = document.getElementById('bin');
	let hexade = document.getElementById('hexad');
	let hexval = String(hexade.value);
    let binEquiv = parseInt(hexval, 16).toString(2).padStart(8, '0');
    binary.value = binEquiv;

}



decToBinButton.addEventListener("click", function(){
	window.location.reload();
});

decToHexaButton.addEventListener("click", function(){
	document.getElementById('dec').value = ' ';

	inputBoxes.innerHTML = 
	`
			<div><p>Decimal</p><input type="text" name="" id="dec" oninput="decToHex()"></div>

			<div><p>Hexadecimal</p><input type="text" name="" id="hexad" oninput="hexToDec()"></div>

			`
});

decToOctalButton.addEventListener("click", function(){
	inputBoxes.innerHTML = 
	`
			<div><p>Decimal</p><input type="text" name="" id="dec" oninput="decToOcta()"></div>

			<div><p>Octal</p><input type="text" name="" id="octa" oninput="octaToDec()"></div>

			`
});


binToHexaButton.addEventListener("click", function(){
	inputBoxes.innerHTML = 
	`
			<div><p>Binary</p><input type="text" name="" id="bin" oninput="binToHex()"></div>

			<div><p>Hexadecimal</p><input type="text" name="" id="hexad" oninput="hex2bin()"></div>

			`
});




















