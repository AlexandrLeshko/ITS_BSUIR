const scrollUp = document.querySelector('.scroll-up');
const header = document.querySelector('header');

function Visible(target) {
	let targetPosition = {
		top: window.pageYOffset + target.getBoundingClientRect().top,
		left: window.pageXOffset + target.getBoundingClientRect().left,
		right: window.pageXOffset + target.getBoundingClientRect().right,
		bottom: window.pageYOffset + target.getBoundingClientRect().bottom
	};
	let windowPosition = {
		top: window.pageYOffset,
		left: window.pageXOffset,
		right: window.pageXOffset + document.documentElement.clientWidth,
		bottom: window.pageYOffset + document.documentElement.clientHeight
	};
	if (targetPosition.bottom > windowPosition.top && targetPosition.top < windowPosition.bottom && targetPosition.right > windowPosition.left && targetPosition.left < windowPosition.right) {
		scrollUp.style.display = 'none';
	} else {
		scrollUp.style.display = 'block';
	};
};
Visible (header);

window.addEventListener('scroll', function() {
	Visible (header);
});