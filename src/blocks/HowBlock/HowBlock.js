import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
	const block = document.querySelector(".HowBlock");
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: block,
			start: "top 20%",
			end: "top: -10%",
			scrub: true,
			invalidateOnRefresh: true
		}
	});

	const [card_1, card_2, card_3] = block.querySelectorAll(".HowBlock__step");
	gsap.set(card_1, { xPercent: 50, rotate: -10 });
	gsap.set(card_2, { xPercent: 0 });
	gsap.set(card_3, { xPercent: -50, rotate: 10 });

	tl.to(card_1, { xPercent: 0, rotate: 0, duration: 1, ease: "power2.out" }, 0);
	tl.to(card_3, { xPercent: 0, rotate: 0, duration: 1, ease: "power2.out" }, 0);
});