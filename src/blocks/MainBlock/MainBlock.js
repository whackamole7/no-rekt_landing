document.addEventListener("DOMContentLoaded", () => {
	const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
	if (isTouchDevice) {
		return;
	}
	
	const mainBlock = document.querySelector(".MainBlock");
	const blob = mainBlock?.querySelector(".MainBlock__cursor-blob");
	if (!mainBlock || !blob) {
		return;
	}

	let isInside = false;

	const tryActivate = (e) => {
		const rect = mainBlock.getBoundingClientRect();
		if (
			e.clientX >= rect.left &&
			e.clientX <= rect.right &&
			e.clientY >= rect.top &&
			e.clientY <= rect.bottom
		) {
			isInside = true;
			blob.classList.add("_active");
			updatePosition(e);
			document.removeEventListener("mousemove", tryActivate);
		}
	};
	document.addEventListener("mousemove", tryActivate);

	const updatePosition = (e) => {
		const rect = mainBlock.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		blob.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
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