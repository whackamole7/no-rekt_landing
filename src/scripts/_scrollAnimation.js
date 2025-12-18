import gsap from "gsap";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", () => {
	if (window.lenisInstance) window.lenisInstance.destroy();
	
	const lenis = new Lenis({
		duration: 0.4,
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		smoothWheel: true,
		smoothTouch: false,
		normalizeWheel: false,
	});

	lenis.on("scroll", ScrollTrigger.update);
	gsap.ticker.add((time) => lenis.raf(time * 1000));
	window.lenisInstance = lenis;

	gsap.utils.toArray(".block:not(footer)").forEach(block => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: block,
				start: "top 42%",
				once: true,
			}
		});
		const fromVars = {
			autoAlpha: 0,
			y: 80,
			scale: 0.96,
		};
		const toVars = {
			autoAlpha: 1,
			y: 0,
			scale: 1,
			duration: 0.9,
			ease: "power3.out"
		}

		const anims = block.querySelectorAll(".anim_scroll");
		anims.forEach((anim, i) => {
			if (!anim) {
				return;
			}
			const isFirst = i === 0;
			tl.fromTo(anim, fromVars, toVars, !isFirst && "=-0.65");
		});
		/* ScrollTrigger.create({
			trigger: block,
			start: "clamp(top 42%)",
			once: true,
			animation: gsap.fromTo(
				container,
				{
					autoAlpha: 0,
					y: 80,
					scale: 0.96,
				},
				{
					autoAlpha: 1,
					y: 0,
					scale: 1,
					duration: 0.9,
					ease: "power3.out"
				}
			)
		}); */
	});
});