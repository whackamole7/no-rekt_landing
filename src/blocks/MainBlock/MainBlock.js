document.addEventListener("DOMContentLoaded", () => {
	const mainBlock = document.querySelector(".MainBlock");
	const blob = mainBlock?.querySelector(".MainBlock__cursor-blob");

	if (!mainBlock || !blob) {
		return;
	}

	let isInside = false;

	const updatePosition = (e) => {
		const rect = mainBlock.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		blob.style.left = `${x}px`;
		blob.style.top = `${y}px`;
	};

	mainBlock.addEventListener("mouseenter", (e) => {
		isInside = true;
		blob.classList.add("_active");
		updatePosition(e);
	});

	mainBlock.addEventListener("mousemove", (e) => {
		if (isInside) {
			updatePosition(e);
		}
	});

	mainBlock.addEventListener("mouseleave", () => {
		isInside = false;
		blob.classList.remove("_active");
	});
});