(function () {
	const nextBtn = document.getElementById("nextBtn");
	const spans = document.querySelectorAll(".d-flex > span");
	const bgIntro = document.getElementById("bgIntro");
	const titleIntro = document.getElementById("titleIntro");
	const describeIntro = document.getElementById("describeIntro");
	let currentSpan = 0;

	if (nextBtn) {
		nextBtn.addEventListener("click", () => {
			spans[currentSpan].classList.remove("p-2");
			spans[currentSpan].classList.add("p-0");
			spans[currentSpan].style.backgroundColor = "#b0b0b0";

			if (currentSpan === 0) {
				titleIntro.textContent = "Leva no Bolso";
				describeIntro.textContent =
					"Seu recurso para garantir excelência e agilidade no atendimento e nos procedimentos diários.";
				bgIntro.classList.remove("bg-intro-img-page1");
				bgIntro.classList.add("bg-intro-img-page2");
			} else if (currentSpan === 1) {
				titleIntro.textContent = "Você encontra aqui";
				describeIntro.innerHTML =
					"Então vem conferir tudo o<br> que preparamos e garantir o seu sucesso!";
				bgIntro.classList.remove("bg-intro-img-page2");
				bgIntro.classList.add("bg-intro-img-page3");
			}

			if (currentSpan < spans.length - 1) {
				currentSpan += 1;
				spans[currentSpan].classList.remove("p-2");
				spans[currentSpan].classList.add("p-2");
				spans[currentSpan].style.backgroundColor = "#FFC722";
			}

			if (currentSpan === spans.length - 1) {
				nextBtn.textContent = "Vamos começar!";
				nextBtn.onclick = () => (window.location.href = "pages/homePage.html");
			}
		});
	}
})();
