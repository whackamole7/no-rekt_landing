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

	let isActive = false;
	mainBlock.addEventListener("mousemove", updateBlobPosition);
	mainBlock.addEventListener("mouseleave", deactivateBlob);

	// fns
	function deactivateBlob() {
		blob.classList.remove("_active");
		isActive = false;
	}
	function updateBlobPosition(e) {
		if (!isActive) {
			isActive = true;
			blob.classList.add("_active");
		}
		_updatePosition(e);
	}
	function _updatePosition(e) {
		const rect = mainBlock.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		blob.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
	}
});