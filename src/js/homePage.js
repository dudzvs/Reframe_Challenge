(function () {
	const menuBtn = document.getElementById("menuBtn");
	const tradeBtn = document.getElementById("tradeBtn");
	const tradeLink = document.getElementById("tradeLink");
	const closeMenuBtn = document.getElementById("closeMenuBtn");
	const menu = document.getElementById("menu");

	if (menuBtn && menu && closeMenuBtn && tradeLink) {
		menuBtn.addEventListener("click", () => {
			menu.style.visibility = "visible";
			menu.style.transform = "translateX(0)";
		});

		closeMenuBtn.addEventListener("click", () => {
			menu.style.transform = "translateX(-100%)";
		});

		if (tradeBtn) {
			tradeBtn.onclick = () => (window.location.href = "pages/trade.html");
		}
		tradeLink.onclick = () => (window.location.href = "pages/trade.html");
	}
})();
