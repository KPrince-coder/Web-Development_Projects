/**
 * Date Completed: November 29, 2022
 *
 */
'use strict';

const displayMeaning = document.querySelectorAll('.d-list__d-def');
const clickTerm = document.querySelectorAll('.d-list__d-term');
const close = document.querySelectorAll('.close');

for (let i = 0; i < displayMeaning.length; i++) {
	const closeMeaning = function () {
		displayMeaning[i].classList.remove('active');
	};

	clickTerm[i].addEventListener('click', function () {
		displayMeaning[i].classList.add('active');
	});

	// close meaning when the `.close` event is fired
	close[i].addEventListener('click', closeMeaning);

	// adding an event listener for esc key
	document.addEventListener('keydown', function (event) {
		if (
			event.key === 'Escape' &&
			displayMeaning[i].classList.contains('active')
		) {
			closeMeaning();
		}
	});
}
