const heroBtn = document.querySelector('.hero-btn');
const modalOpen = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close-btn');

const mobBtn = document.querySelector('.js-header-menu-btn');
const mobModal = document.querySelector('.js-header-modal-menu');
const mobModalClose = document.querySelector('.js-hmodal-close-btn');
const mobModalList = document.querySelector('.js-hmodal-list');


heroBtn.addEventListener('click', onHeroBtnClick);
modalClose.addEventListener('click', onModalCloseClick);
mobBtn.addEventListener('click', onMobBtnClick);
mobModalClose.addEventListener('click', onMobModalCloseClick);
mobModalList.addEventListener('click', onMobModalCloseClick)

function onHeroBtnClick(e) {
      e.preventDefault();
    modalOpen.classList.add('is-open');
}

function onModalCloseClick(params) {
     modalOpen.classList.remove('is-open');
}

function onMobBtnClick() {
  mobModal.classList.add('is-open');
}

function onMobModalCloseClick() {
    mobModal.classList.remove('is-open');
}