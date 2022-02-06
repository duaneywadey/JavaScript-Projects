var textArea = document.getElementById('textArea');
 
const countwords = () => {
	let noc  = document.getElementById('textArea').value.length;
	let now = document.getElementById('textArea').value;
	let now2 = document.getElementById('textArea').value;

	now = now.match(/\w+/g);
	now = now.length;
	console.log(now);

	
	now2 = now2.match(/[\w|\)][.?!](\s|$)/g);
	now2 = now2.length
	console.log(now2)
	

	document.getElementById('showWordsCount').innerHTML = "The total words: " + now;
	document.getElementById('showSentencesCount').innerHTML = "The total sentences: " + now2;
}



document.querySelector("textarea").addEventListener("paste", function(e) {
    e.preventDefault();
    var text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
});

document.getElementById("pw")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("enterButton").click();
    }
});

