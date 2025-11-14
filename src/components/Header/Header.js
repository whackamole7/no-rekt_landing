document.addEventListener("DOMContentLoaded", () => {
	const header = document.querySelector(".Header");
	const burgerButton = header.querySelector(".Header__burger-button");
	const burgerContent = header.querySelector(".Header__burger-content");
	burgerButton.addEventListener("change", (e) => {
		if (e.target.checked) {
			openBurgerContent();
		} else {
			closeBurgerContent();
		}
	});

	const backdrop = header.querySelector(".Header__backdrop");
	backdrop.addEventListener("click", () => {
		closeBurgerContent();
	});

	function openBurgerContent() {
		header.classList.add("_open");
		burgerContent.classList.remove("_scale-out");
	}
	function closeBurgerContent() {
		header.classList.remove("_open");
		burgerContent.classList.add("_scale-out");
		setTimeout(() => {
			burgerContent.classList.remove("_scale-out");
		}, 200);
		burgerButton.checked = false;
	}
});