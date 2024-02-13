const heroBtn = document.querySelector('.hero-btn');
const modalOpen = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close-btn');


heroBtn.addEventListener('click', onHeroBtnClick);
modalClose.addEventListener('click', onModalCloseClick);

function onHeroBtnClick(e) {
      e.preventDefault();
    modalOpen.classList.add('is-open');
}

function onModalCloseClick(params) {
     modalOpen.classList.remove('is-open');
}