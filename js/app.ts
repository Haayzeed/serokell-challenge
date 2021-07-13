// variables
const contactForm = document.querySelector('.form');
const user = document.querySelector('.form__input--name') as HTMLInputElement;
const subject = document.querySelector('.form__input--subject') as HTMLInputElement;
const message = document.querySelector('.form__input--message') as HTMLTextAreaElement;
const iconOpen = document.querySelector('.header__icon--open') as HTMLImageElement;
const iconClose = document.querySelector('.header__icon--close') as HTMLImageElement;
const menuList = document.querySelector('.nav') as HTMLElement;
// function to open mobile nav
iconOpen.addEventListener('click', ()=>{
    menuList.style.left = '0';
    iconOpen.style.display = 'none';
    iconClose.style.display = 'block';
})
// function to close mobile nav
iconClose.addEventListener('click', ()=>{
    menuList.style.left = '-100%';
    iconClose.style.display = 'none';
    iconOpen.style.display = 'block';
})
// function to submit contact form
contactForm.addEventListener('submit', (e: Event)=>{
    e.preventDefault()
    if((user.value == '') && (subject.value == '') && (message.value == '')){
        console.log("Fields are empty!!");
    }
    else{
        console.log('Name:', user.value);
        console.log('Subject:', subject.value);
        console.log('Message:', message.value);
    }
})