import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
	const block = document.querySelector(".HowBlock");
	const MAX_STEPS_HEIGHT = 575;
	const steps = block.querySelector(".HowBlock__steps");
	if (steps.scrollHeight > MAX_STEPS_HEIGHT) {
		return;
	}

	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: block,
			start: "top 30%",
			end: "top: 0%",
			scrub: true,
			invalidateOnRefresh: true
		}
	});

	const [step_1, step_2, step_3] = block.querySelectorAll(".HowBlock__step");
	gsap.set(step_1, { xPercent: 50, rotate: -10 });
	gsap.set(step_2, { xPercent: 0 });
	gsap.set(step_3, { xPercent: -50, rotate: 10 });

	tl.to(step_1, { xPercent: 0, rotate: 0, duration: 1, ease: "power2.out" }, 0);
	tl.to(step_3, { xPercent: 0, rotate: 0, duration: 1, ease: "power2.out" }, 0);
});