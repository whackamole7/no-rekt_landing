const BURGER_BREAKPOINT = 992;

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
	backdrop.addEventListener("click", closeBurgerContent);

	const navLinks = burgerContent.querySelectorAll(".Header__nav-link");
	const isBurgerShown = window.innerWidth <= BURGER_BREAKPOINT;
	if (isBurgerShown) {
		navLinks.forEach(link => {
			link.addEventListener("click", () => {
				setTimeout(closeBurgerContent, 100);
			});
		});
	}

	function openBurgerContent() {
		burgerContent.animate([
			{ transform: "scale(0.5)", opacity: 0 },
			{ transform: "scale(1)", opacity: 1 },
		], ANIM_OPTIONS);
		backdrop.animate([
			{ opacity: 0 },
			{ opacity: 0.7 },
		], ANIM_OPTIONS);
		burgerContent.style.display = "block";
		backdrop.style.display = "block";
	}
	function closeBurgerContent() {
		const burgerContentAnim = burgerContent.animate([
			{ transform: "scale(1)", opacity: 1 },
			{ transform: "scale(0.5)", opacity: 0 },
		], ANIM_OPTIONS);
		const backdropAnim = backdrop.animate([
			{ opacity: 0.7 },
			{ opacity: 0 },
		], ANIM_OPTIONS);
		burgerContentAnim.onfinish = () => burgerContent.style.display = "none";
		backdropAnim.onfinish = () => backdrop.style.display = "none";

		burgerButton.checked = false;
	}
});

const ANIM_OPTIONS = {
	duration: 200,
	easing: "ease",
	fill: "forwards",
}