var timesDenied = 0;

function accepted() {
	window.location.href = "page2.html";
}
function denied() {
	var questionContainer = document.getElementById("question-container-1");
	var questionButtons = document.getElementById("question-buttons");
	var questionText = document.getElementById("question-text");
	var chooseYes = document.getElementById("choose-yes");
	var chooseNo = document.getElementById("choose-no");
	
	timesDenied += 1;
	if (timesDenied == 1) {
		questionText.innerText = "Okay uhm, Let's try that again.";
		chooseNo.innerText = "I don't.";
	}
	else if (timesDenied == 2) {
		questionText.innerText = "Hm, just what do you think you're doing?";
		
		chooseNo.style.padding = "5px";
		chooseNo.innerText = "stop.";
		
		chooseYes.innerText = "JUST KIDDING, I WANT TO!";
	}
	else if (timesDenied == 3) {
		questionText.innerText = "Okay thats it...";
		questionContainer.appendChild(chooseNo);
		
		chooseNo.style.padding = "5px";
		chooseNo.innerText = "x";
		chooseNo.style.marginTop = "75%";
		
		chooseYes.innerText = "Like, Why wouldn't I!?";
		chooseYes.style.padding = "60px";
	}
	else if (timesDenied == 4) {
		questionButtons.appendChild(chooseNo);
		questionButtons.style.height = "100vh";
		questionText.innerText = "";
		
		chooseNo.style.padding = "10px";
		chooseNo.innerText = "Yes!";
		chooseNo.style.marginTop = "10px";
		
		chooseYes.innerText = "Yes!";
		chooseYes.style.padding = "10px";
	}
	else if (timesDenied == 5) {
		window.location.href = "page2.html";
	}
};