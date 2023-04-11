const burger__button = document.querySelector('.burger__button');
const burger__menu = document.querySelector('.burger__menu');

burger__button.addEventListener('click', () => {
	burger__button.classList.toggle('burger--clicked');
	burger__menu.classList.toggle('burger--opened');
});