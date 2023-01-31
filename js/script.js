/* INSERTION DU COMPTE A REBOURS */
const body = document.body;
const endTime = new Date('March 27 2023 23:59:59');
const daysEl = document.getElementById('jours');
const hoursEl = document.getElementById('heures');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('secondes');

setInterval(updateCountdown, 1000)
setInterval(createSnowFlake, 50);

function updateCountdown() {
	const startTime = new Date();
	const diff = endTime - startTime;
	const jours = Math.floor(diff / 1000 / 60 / 60 / 24);
	const heures = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const secondes = Math.floor(diff / 1000) % 60;
	daysEl.innerHTML = jours;
	hoursEl.innerHTML = heures < 10 ? '0'+heures : heures;
	minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
	secondsEl.innerHTML = secondes < 10 ? '0'+secondes : secondes;
}




(function () {
	"use strict";
  
	var carousels = function () {
	  $(".owl-carousel1").owlCarousel({
		loop: true,
		center: true,
		margin: 0,
		responsiveClass: true,
		nav: false,
		responsive: {
		  0: {
			items: 1,
			nav: false
		  },
		  680: {
			items: 2,
			nav: false,
			loop: false
		  },
		  1000: {
			items: 3,
			nav: true
		  }
		}
	  });
	};
  
	(function ($) {
	  carousels();
	})(jQuery);
  })();
  

