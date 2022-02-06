const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


const currentYear = new Date().getFullYear();



function setDate (){
const customMonths = document.getElementById('months').value;
const whatDate = document.getElementById('whatDate').value;
const customYear = document.getElementById('years').value;
console.log(customMonths + " " + whatDate + " " + customYear);
const newYearTime = new Date(`${customMonths} ${whatDate} ${customYear} 00:00:00`);
const currentTime = new Date();
const diff = newYearTime - currentTime;

const d = Math.floor(diff/1000/60/60/24);
const h = Math.floor(diff/1000/60/60)%24;
const m = Math.floor(diff/1000/60)%60;
const s = Math.floor(diff/1000)%60;


function ifNegative(numOfDays){
	if(numOfDays<0){
		document.getElementById("alertText").innerHTML = "NOTE: Please enter a valid date!"; 	
}

	else {
		document.getElementById("alertText").style.display = "none";
		days.innerHTML = d;
		hours.innerHTML = h < 10 ? '0' + h : h;
		minutes.innerHTML = m < 10 ? '0' + m : m;
		seconds.innerHTML = s < 10 ? '0' + s : s;
		setInterval(setDate, 1000);

	}


}
ifNegative(d);


}







