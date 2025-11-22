import Glide from "@glidejs/glide";

document.addEventListener("DOMContentLoaded", () => {
	const block = document.querySelector(".ProtocolBlock");
	const shouldActivateGlide = window.innerWidth < 992;
	if (shouldActivateGlide) {
		const glide = activateGlide();
		const nav = block.querySelector(".ProtocolBlock__table-nav");
		glide.on("swipe.start", () => {
			nav.classList.add("_hidden");
		});
		glide.on("swipe.end", () => {
			nav.classList.remove("_hidden");
		});
	}

	function activateGlide() {
		const slidesContainer = block.querySelector(".glide__slides");
		const cardsContainer = block.querySelector(".ProtocolBlock__table-cards");
		const cards = cardsContainer.children;
		while (cards.length > 0) {
			const card = cards[0];
			const li = document.createElement("li");
			li.className = "glide__slide";
			li.appendChild(card);
			slidesContainer.appendChild(li);
		}
		cardsContainer.remove();
		
		const glide = new Glide(".ProtocolBlock__glide", {
			type: "slider",
			perView: 1,
			gap: 30,
		}).mount();
		return glide;
	}
});