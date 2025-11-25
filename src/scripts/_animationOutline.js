document.addEventListener("DOMContentLoaded", () => {
	const createSVG = (width, height, radius) => {
		const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

		const rectangle = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"rect"
		);

		svg.setAttributeNS(
			"http://www.w3.org/2000/svg",
			"viewBox",
			`0 0 ${width} ${height}`
		);

		rectangle.setAttribute("x", "0");
		rectangle.setAttribute("y", "0");
		rectangle.setAttribute("width", "100%");
		rectangle.setAttribute("height", "100%");
		rectangle.setAttribute("rx", `${radius}`);
		rectangle.setAttribute("ry", `${radius}`);
		rectangle.setAttribute("pathLength", "10");

		svg.appendChild(rectangle);

		return svg;
	};

	document.querySelectorAll(".anim_outline").forEach(el => {
		const style = getComputedStyle(el);

		const lines = document.createElement("div");

		lines.classList.add("anim_outline__lines");

		const groupTop = document.createElement("div");
		const groupBottom = document.createElement("div");

		const radius = el.getAttribute("data-anim-radius");
		const svg = createSVG(
			el.offsetWidth,
			el.offsetHeight,
			radius ?? parseInt(style.borderRadius, 10)
		);

		groupTop.appendChild(svg);
		groupTop.appendChild(svg.cloneNode(true));
		groupTop.appendChild(svg.cloneNode(true));
		groupTop.appendChild(svg.cloneNode(true));

		groupBottom.appendChild(svg.cloneNode(true));
		groupBottom.appendChild(svg.cloneNode(true));
		groupBottom.appendChild(svg.cloneNode(true));
		groupBottom.appendChild(svg.cloneNode(true));

		lines.appendChild(groupTop);
		lines.appendChild(groupBottom);

		el.appendChild(lines);

		const startAnimation = () => {
			el.classList.add("_start");
		}
		const stopAnimation = () => {
			el.classList.remove("_start");
		}
		el.addEventListener("pointerenter", startAnimation);
		el.addEventListener("focus", startAnimation);
		svg.addEventListener("animationend", stopAnimation);
	});
});