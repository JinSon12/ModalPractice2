const modalBtn = document.querySelector('.modal-btn');
const modalBg = document.querySelector('.modal_bg');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', function () {
    modalBg.classList.add('bg-active');
});
modalClose.addEventListener('click', function () {
    modalBg.classList.remove('bg-active');
});