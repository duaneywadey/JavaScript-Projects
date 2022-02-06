const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const btnrestart = document.getElementById('restart');
const modal = document.querySelector('.modal');

const scoreboard = {
	Andy: 0,
	Hershey: 0,
	Pitt: 0,
	Money: 0,
	games: 1,
	winningAndy: 0,
	winningHershey: 0,
	winningPitt: 0
}

function play(e){
	restart.style.display = 'inline-block';
	const playerChoice = e.target.id;
	const numOfGames = scoreboard.games++;
	var Andy =  getRandom();
	var Hershey =  getRandom();
	var Pitt =  getRandom();
	const winner = getGreatest(Andy, Hershey, Pitt);
	const highest = getGreatestScore(Andy, Hershey, Pitt);
	showWinner(winner, highest, playerChoice);
	console.log("\n\nAndy: " + Andy);
	console.log("Hershey: " + Hershey);
	console.log("Pitt: " + Pitt);
	console.log("Winner: " + winner);
	console.log("\nHighest score: " + highest + " minutes");
	console.log(playerChoice);
	console.log(numOfGames);
	plusScore(winner, numOfGames);

}


function getRandom() {
		const randomTime = (Math.random() * (5.5000 - 9.9000) + 9.9000).toFixed(2)
		return randomTime;

	}  


function getGreatest(a,d,j){

	if(a< d && a < j) {
		return "Andy";
	}

	else if(d < a && d < j){
		return "Hershey";
	}

	else if(j < a && j < d ){
		return "Pitt";
	}

}

function getGreatestScore(a,d,j){

	if(a< d && a < j) {
		return a;
	}

	else if(d < a && d < j){
		return d;
	}

	else if(j < a && j < d ){
		return j;
	}

}




function plusScore(winner, numOfGames){

	if(winner === 'Andy') {
		scoreboard.Andy+=1;
		scoreboard.winningAndy = scoreboard.Andy;
		scoreboard.winningAndy/=numOfGames;
		var decA = Math.round(scoreboard.winningAndy * 100); 
		console.log(decA + "%");
		scoreboard.winningAndy = decA;
	}

	else if(winner === 'Hershey') {
		scoreboard.Hershey+=1;
		scoreboard.winningHershey = scoreboard.Hershey;
		scoreboard.winningHershey/=numOfGames;
		var decH = Math.round(scoreboard.winningHershey * 100); 
		console.log(decH + "%");
		scoreboard.winningHershey = decH;
	}

	else if(winner === 'Pitt'){
		scoreboard.Pitt+=1;
		scoreboard.winningPitt = scoreboard.Pitt;
		scoreboard.winningPitt/=numOfGames;	
		var decP = Math.round(scoreboard.winningPitt * 100);
		console.log(decP + "%");
		scoreboard.winningPitt = decP; 
	}

	score.innerHTML = `<p>Andy: ${scoreboard.Andy} (${scoreboard.winningAndy}%)</p>
						<p>Hershey: ${scoreboard.Hershey} (${scoreboard.winningHershey}%)</p>
						<p>Pitt: ${scoreboard.Pitt} (${scoreboard.winningPitt}%)</p>
						`;

}





function showWinner(winner, highest, playerChoice) {
	if(winner === 'Andy' && winner == playerChoice){
		scoreboard.Money+=500;
		result.innerHTML = `<h1 class="text-win">Andy Won! Congrats!</h1>
							<i class ="fas  fa-hand-${highest}" fa-10x> </i>
							<p>Andy finished in <strong>${highest} minutes </strong> </p>
									`;
	}
	else if(winner === 'Hershey' && winner == playerChoice ) {
		scoreboard.Money+=500;
		result.innerHTML = `<h1 class="text-win">Hershey won! Congrats!</h1>
							<i class ="fas  fa-hand-${highest}" fa-10x> </i>
							<p>Hershey finished in <strong>${highest} minutes</strong> </p>
									`;		

	}

	else if(winner === 'Pitt' && winner == playerChoice) {
		scoreboard.Money+=500;
			result.innerHTML = `<h1 class="text-win">Pitt won! Congrats!</h1>
								<i class ="fas  fa-hand-${highest}" fa-10x> </i>
								<p>Pitt finished in <strong>${highest} minutes </strong> </p>
										`;		

		}  

	else{
		scoreboard.Money-=200;
		result.innerHTML = `<h1>Sorry, you lost your bet</h1>
							<i class ="fas  fa-hand-${highest}" fa-10x> </i>
							<p> Winner was ${winner} and finished in <strong>${highest} minutes!</strong> </p>
									`;
	}


	money.innerHTML = `<p>Money: $ ${scoreboard.Money}</p>`;

	modal.style.display = 'block';


}


function clearModal(e) {
	if(e.target == modal) {
		modal.style.display= 'none';

	}
}

btnrestart.addEventListener("click", function() {
  if (scoreboard.Money < 0) {
  	alert('Sorry, you failed!')
  	window.location.reload();
  }

  if (scoreboard.Money > 0) {
  	alert("Here's your $" + scoreboard.Money + " Enjoy!")
  	window.location.reload();
  }
  





});


choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click',clearModal);
