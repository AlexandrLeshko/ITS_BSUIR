const committee__btnOne = document.querySelector('.committee__button:nth-child(1)');
const committee__btnTwo = document.querySelector('.committee__button:nth-child(2)');
const committee__info = document.querySelector('.committee__info')
const committee__mover = document.querySelector('.committee__topic:nth-child(1)');

committee__mover.style.marginLeft = '0px';
committee__info.style.borderRadius = '0 10px 10px 10px';
committee__info.style.maxHeight = committee__info.children[0].clientHeight + 'px';

committee__btnOne.addEventListener('click', () => {
	committee__btnOne.classList.add('committee__button--selected');
	committee__btnTwo.classList.remove('committee__button--selected');
	committee__mover.style.marginLeft = '0px';
	committee__info.style.borderRadius = '0 10px 10px 10px';
	committee__info.style.maxHeight = committee__info.children[0].clientHeight + 'px';
});

committee__btnTwo.addEventListener('click', () => {
	committee__btnOne.classList.remove('committee__button--selected');
	committee__btnTwo.classList.add('committee__button--selected');
	committee__mover.style.marginLeft =  - committee__mover.clientWidth + 'px';
	committee__info.style.borderRadius = '10px 10px 10px 10px';
	committee__info.style.maxHeight = committee__info.children[1].clientHeight + 'px';
});