import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// Popup
const popupLinks = document.querySelectorAll('.popup-link');

let unlock = true;

if(popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for(let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if(curentPopup && unlock) {
		curentPopup.classList.add('open');
		curentPopup.addEventListener('click', function(e) {
			if(!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive) {
	if (unlock) {
		popupActive.classList.remove('open');
	}
}

// Scroll to selected section
function onLinkClick(e) {
	const link = e.target;
	if(link.dataset.goto && document.querySelector(link.dataset.goto)) {
		const gotoBlock = document.querySelector(link.dataset.goto);
		const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

		window.scrollTo({
			top: gotoBlockValue,
			behavior: "smooth"
		});
		e.preventDefault();
	}	
}
//Scroll on click scrollebleLinks
const scrollebleLinks = document.querySelectorAll('a[data-goto]');
if(scrollebleLinks.length > 0) {
	scrollebleLinks.forEach(scrollebleLink => {
		scrollebleLink.addEventListener("click", onLinkClick);
	});
}

// Swiper slider
const swiper = new Swiper('.swiper', {
	loop: true,
	speed: 400,
	navigation: {
	  nextEl: '.slider__nav-next',
	  prevEl: '.slider__nav-prev'
	},
	slidesPerView: 3,
	watchOverflow: true,
	slideToClickedSlide: true,
	breakpoints: {
		320: {
			slidesPerView: 1.2,
			spaceBetween: 24,
		},
		744: {
			slidesPerView: 2.3,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 32,
		}
 }
});



