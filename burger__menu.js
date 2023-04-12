const burger__button = document.querySelector('.burger__button');
const burger__menu = document.querySelector('.burger__menu');

burger__button.addEventListener('click', () => {
	burger__menu.classList.toggle('burger--opened');
	if (burger__menu.classList.contains('burger--opened')) {
		burger__button.innerHTML = '✕';
		burger__button.style.transform = 'rotateZ(-90deg)';
	} else {
		burger__button.innerHTML = '☰';
		burger__button.style.transform = 'rotateZ(0deg)';
	}
});