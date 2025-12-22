import { arrow, autoUpdate, computePosition, offset } from "@floating-ui/dom";

document.addEventListener("DOMContentLoaded", () => {
	const block = document.querySelector(".PerksBlock");
	const triggers = block.querySelectorAll("[data-tooltip-type='trigger']");
	const anchors = block.querySelectorAll("[data-tooltip-type='anchor']");
	const tooltips = block.querySelectorAll("[data-tooltip-type='tooltip']");

	triggers.forEach((trigger, i) => {
		const [anchor, tooltip] = [anchors[i], tooltips[i]];
		const arrowEl = tooltip.querySelector("._tooltip-arrow");
		const placement = tooltip.getAttribute("data-tooltip-placement");
		function updatePosition() {
			let crossAxisOffset;
			if (placement === "bottom-start") {
				crossAxisOffset = -14;
			} else if (placement === "bottom-end") {
				crossAxisOffset = 14;
			}
			computePosition(anchor, tooltip, {
				placement,
				middleware: [
					offset({ mainAxis: 16, crossAxis: crossAxisOffset }),
					arrow({ element: arrowEl })
				]
			}).then(({ x, y, middlewareData }) => {
				const { arrow } = middlewareData;
				Object.assign(tooltip.style, {
					left: `${x}px`,
					top: `${y}px`,
				});

				Object.assign(arrowEl.style, {
					left: `${arrow.x}px`,
					top: `${arrow.y}px`,
				})
			});
		}

		function show() {
			tooltip.style.display = "block";
			updatePosition();
			cleanup = autoUpdate(anchor, tooltip, updatePosition);
		}

		function hide() {
			tooltip.style.display = "none";
			if (cleanup) {
				cleanup();
			};
		}

		let cleanup = null;

		trigger.addEventListener("mouseenter", show);
		trigger.addEventListener("mouseleave", hide);
	});
});