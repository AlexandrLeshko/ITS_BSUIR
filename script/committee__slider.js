const committee__buttons = document.getElementsByClassName('committee__buttons')[0];
const committee__buttonS = document.getElementsByClassName('committee__button');
const committee__info = document.getElementsByClassName('committee__info')[0];
const committee__topicS = document.getElementsByClassName('committee__topic');
const committee__mover = document.getElementsByClassName('committee__topic')[0];
let currentCommitteeButtonIndex = 0;

committee__mover.style.marginLeft = '0px';
committee__info.style.borderRadius = '0 10px 10px 10px';
committee__info.style.maxHeight = committee__mover.clientHeight + 'px';

function setMarginLeft() {
	committee__mover.style.marginLeft = -committee__info.clientWidth * currentCommitteeButtonIndex + 'px';
}

function setHeight() {
	committee__info.style.minHeight = committee__topicS[currentCommitteeButtonIndex].clientHeight + 'px';
	committee__info.style.maxHeight = committee__topicS[currentCommitteeButtonIndex].clientHeight + 'px';
}

function resizeButtons () {
	for (let committee__button of committee__buttonS) {
		committee__button.style.maxWidth = (committee__buttons.clientWidth * 0.9 - (committee__buttonS.length - 1) * 12) / committee__buttonS.length + 'px';
	}
}
resizeButtons();

addEventListener('resize', setMarginLeft);
addEventListener('resize', setHeight);
addEventListener('resize', resizeButtons);

for (let committee__button of committee__buttonS) {
	committee__button.addEventListener('click', () => {
		for (let committee__btn of committee__buttonS) {
			committee__btn.classList.remove('committee__button--selected');
		}
		committee__button.classList.add('committee__button--selected');
		if (committee__button === committee__buttonS[0]) {
			committee__info.style.borderRadius = '0 10px 10px 10px';
		} else {
			committee__info.style.borderRadius = '10px 10px 10px 10px';
		}
	})
}

for (let i = 0; i < committee__buttonS.length; i++) {
	committee__buttonS[i].addEventListener('click', () => {
		currentCommitteeButtonIndex = i;
		setMarginLeft();
		setHeight();
	})
}