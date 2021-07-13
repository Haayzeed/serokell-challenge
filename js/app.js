// variables
var contactForm = document.querySelector('.form');
var user = document.querySelector('.name');
var subject = document.querySelector('.subject');
var message = document.querySelector('.message');
var iconOpen = document.querySelector('.icon__open');
var iconClose = document.querySelector('.icon__close');
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
