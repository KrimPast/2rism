customSelect('select');

const picker = new easepick.create({
		// lang: 'ru-Ru',
        element: document.getElementById('date'),
        
        css: [
          'https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css',
        ],
        format: "DD.MM.YYYY",
      });

const inputSubscribe = document.querySelector('.subscribe__input');
const label = document.querySelector('.subscribe__label')
inputSubscribe.addEventListener('input', () => {
	if(inputSubscribe.value.trim()){
		label.classList.add('.subscribe__label--top');
	} else{
		label.classList.remove('.subscribe__label--top');
	}
})


// Mobile nav button

const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const mobileNavIcon = document.querySelector('.nav-icon');
const mobileNavMenu = document.querySelector('.mobile-nav');
const mobileNavFade = document.querySelector('.mobile-nav-fade');


mobileNavBtn.addEventListener('click',() => {
	mobileNavIcon.classList.toggle('nav-icon-active');
	mobileNavMenu.classList.toggle('mobile-nav--open');
	mobileNavFade.classList.toggle('mobile-nav-fade--open');
	document.body.classList.toggle('no-scroll');
})
mobileNavFade.addEventListener('click',() => {
	mobileNavIcon.classList.toggle('nav-icon-active');
	mobileNavMenu.classList.toggle('mobile-nav--open');
	mobileNavFade.classList.toggle('mobile-nav-fade--open');
	document.body.classList.toggle('no-scroll');
})