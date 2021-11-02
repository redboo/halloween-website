/* Show menu */
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

// Validate if constant exists
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}
// Validate if constant exists
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/* Remove menu mobile */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* Home swiper */
let homeSwiper = new Swiper(".home-swiper", {
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

/* Change background header */
function scrollHeader() {
	const header = document.getElementById("header");
	// When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 50) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/* New swiper */
let newSwiper = new Swiper(".new-swiper", {
	centeredSlides: true,
	slidesPerView: "auto",
	spaceBetween: 16,
	loop: true,
});

/* Scroll sections active link */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.scrollY;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}

window.addEventListener("scroll", scrollActive);

/* Show scroll up */
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	// When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 460) {
		scrollUp.classList.add("show-scroll");
	} else {
		scrollUp.classList.remove("show-scroll");
	}
}
window.addEventListener("scroll", scrollUp);

/* Scroll reveal animation */
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2500,
	delay: 400,
	// reset: true,
});

sr.reveal(".home-swiper, .new-swiper, .newsletter__container");
sr.reveal(".category__data, .trick__content, .footer__content", {
	interval: 100,
});
sr.reveal(".about__data, .discount__img", { origin: "left" });
sr.reveal(".about__img, .discount__data", { origin: "right" });
