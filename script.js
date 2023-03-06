var buttonClickCount = 0;
var button = document.querySelector(".card-button");

	function moveButton() {
		buttonClickCount++;
		if (buttonClickCount >= 1) {
			button.style.top = Math.floor(Math.random() * 90) + "%";
			button.style.left = Math.floor(Math.random() * 90) + "%";
		}
		if (buttonClickCount === 6) {
			window.location.href= "message.html";
			alert("Parabéns, tenho uma mensagem para voce!");
			buttonClickCount = 0;
		}
	}	