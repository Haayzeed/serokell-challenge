// variables
var contactForm = document.querySelector('.form');
var user = document.querySelector('.form__input--name');
var subject = document.querySelector('.form__input--subject');
var message = document.querySelector('.form__input--message');
var iconOpen = document.querySelector('.header__icon--open');
var iconClose = document.querySelector('.header__icon--close');
var menuList = document.querySelector('.nav');
// function to open mobile nav
iconOpen.addEventListener('click', function () {
    menuList.style.left = '0';
    iconOpen.style.display = 'none';
    iconClose.style.display = 'block';
});
// function to close mobile nav
iconClose.addEventListener('click', function () {
    menuList.style.left = '-100%';
    iconClose.style.display = 'none';
    iconOpen.style.display = 'block';
});
// function to submit contact form
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if ((user.value == '') && (subject.value == '') && (message.value == '')) {
        console.log("Fields are empty!!");
    }
    else {
        console.log('Name:', user.value);
        console.log('Subject:', subject.value);
        console.log('Message:', message.value);
    }
});
